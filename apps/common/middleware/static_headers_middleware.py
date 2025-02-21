# coding=utf-8
"""
 @project: gejieai
 @Author：gordon
 @date：2025-02-21
 @file： static_headers_middleware.py
 @desc: PWA实现，1、可以通过手机浏览器（Safri）直接创建PWA应用 2、Pwa可以全屏 3、隐藏了浏览器的状态栏。

"""
import json
import base64
from django.utils.deprecation import MiddlewareMixin
from common.cache_data.application_access_token_cache import get_application_access_token

class StaticHeadersMiddleware(MiddlewareMixin):
    def process_response(self, request, response):
        if request.path.startswith('/ui/chat/'):
            access_token = request.path.replace('/ui/chat/', '')
            application_access_token = get_application_access_token(access_token, True)
            
            if application_access_token is not None:
                white_active = application_access_token.get('white_active', False)
                white_list = application_access_token.get('white_list', [])
                application_icon = application_access_token.get('application_icon')  # 正确获取方式
                application_name = application_access_token.get('application_name')   # 关键修改点：使用正确的get方法

                if white_active:
                    response['Content-Security-Policy'] = f'frame-ancestors {" ".join(white_list)}'

                if application_icon and application_name:
                    # 生成PWA清单文件
                    manifest = {
                        "name": application_name,
                        "short_name": application_name,
                        "start_url": "/",
                        "display": "fullscreen",
                        "icons": [
                            {
                                "src": application_icon,
                                "sizes": "192x192 512x512",
                                "type": "image/png"
                            }
                        ]
                    }
                    manifest_b64 = base64.b64encode(json.dumps(manifest).encode()).decode()
                    
                    pwa_tags = (
                        f'<link rel="manifest" href="data:application/manifest+json;base64,{manifest_b64}">\n'
                        f'<meta name="apple-mobile-web-app-capable" content="yes">\n'
                        f'<meta name="apple-mobile-web-app-title" content="{application_name}">\n'
                        f'<link rel="apple-touch-icon" href="{application_icon}">'
                    )

                    modified_content = (
                        response.content.decode('utf-8')
                        .replace(
                            '<link rel="icon" href="/ui/favicon.ico" />',
                            f'<link rel="icon" href="{application_icon}" />\n{pwa_tags}'
                        )
                        .replace(
                            '<title>GejieAi</title>',
                            f'<title>{application_name}</title>'
                        )
                    )
                    response.content = modified_content.encode("utf-8")

        return response
