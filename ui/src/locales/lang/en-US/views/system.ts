export default {
  title: 'System',
  authentication: {
    title: 'Login Authentication',
    ldap: {
      title: 'LDAP Settings',
      address: 'LDAP Address',
      serverPlaceholder: 'Please enter LDAP address',
      bindDN: 'Bind DN',
      bindDNPlaceholder: 'Please enter Bind DN',
      password: 'Password',
      ou: 'User OU',
      ouPlaceholder: 'Please enter User OU',
      ldap_filter: 'User Filter',
      ldap_filterPlaceholder: 'Please enter User Filter',
      ldap_mapping: 'LDAP Attribute Mapping',
      ldap_mappingPlaceholder: 'Please enter LDAP Attribute Mapping',
      test: 'Test Connection',
      enableAuthentication: 'Enable LDAP Authentication',
      testConnectionSuccess: 'Test Connection Success',
      testConnectionFailed: 'Test Connection Failed'
    },
    cas: {
      title: 'CAS Settings',
      ldpUri: 'ldpUri',
      ldpUriPlaceholder: 'Please enter ldpUri',
      validateUrl: 'Validation Address',
      validateUrlPlaceholder: 'Please enter Validation Address',
      redirectUrl: 'Callback Address',
      redirectUrlPlaceholder: 'Please enter Callback Address',
      enableAuthentication: 'Enable CAS Authentication'
    },
    oidc: {
      title: 'OIDC Settings',
      authEndpoint: 'Auth Endpoint',
      authEndpointPlaceholder: 'Please enter Auth Endpoint',
      tokenEndpoint: 'Token Endpoint',
      tokenEndpointPlaceholder: 'Please enter Token Endpoint',
      userInfoEndpoint: 'User Info Endpoint',
      userInfoEndpointPlaceholder: 'Please enter User Info Endpoint',
      clientId: 'Client ID',
      clientIdPlaceholder: 'Please enter Client ID',
      clientSecret: 'Client Secret',
      clientSecretPlaceholder: 'Please enter Client Secret',
      logoutEndpoint: 'Logout Endpoint',
      logoutEndpointPlaceholder: 'Please enter Logout Endpoint',
      redirectUrl: 'Redirect URL',
      redirectUrlPlaceholder: 'Please enter Redirect URL',
      enableAuthentication: 'Enable OIDC Authentication'
    },

    oauth2: {
      title: 'OAuth2 Settings',
      authEndpoint: 'Auth Endpoint',
      authEndpointPlaceholder: 'Please enter Auth Endpoint',
      tokenEndpoint: 'Token Endpoint',
      tokenEndpointPlaceholder: 'Please enter Token Endpoint',
      userInfoEndpoint: 'User Info Endpoint',
      userInfoEndpointPlaceholder: 'Please enter User Info Endpoint',
      scope: 'Scope',
      scopePlaceholder: 'Please enter Scope',
      clientId: 'Client ID',
      clientIdPlaceholder: 'Please enter Client ID',
      clientSecret: 'Client Secret',
      clientSecretPlaceholder: 'Please enter Client Secret',
      redirectUrl: 'Redirect URL',
      redirectUrlPlaceholder: 'Please enter Redirect URL',
      filedMapping: 'Field Mapping',
      filedMappingPlaceholder: 'Please enter Field Mapping',
      enableAuthentication: 'Enable OAuth2 Authentication'
    },
    scanTheQRCode: {
      title: 'Scan the QR code',
      wecom: 'WeCom',
      dingtalk: 'DingTalk',
      lark: 'Lark',
      effective: 'Effective',
      alreadyTurnedOn: 'Turned On',
      notEnabled: 'Not Enabled',
      validate: 'Validate',
      validateSuccess: 'Validation Successful',
      validateFailed: 'Validation Failed',
      validateFailedTip: 'Please fill in all required fields and ensure the format is correct',
      appKeyPlaceholder: 'Please enter App Key',
      appSecretPlaceholder: 'Please enter App Secret',
      corpIdPlaceholder: 'Please enter Corp ID',
      agentIdPlaceholder: 'Please enter Agent ID',
      callbackWarning: 'Please enter a valid URL address'
    }
  },
  theme: {
    title: 'Appearance Settings',
    platformDisplayTheme: 'Platform Display Theme',
    customTheme: 'Custom Theme',
    platformLoginSettings: 'Platform Login Settings',
    custom: 'Custom',
    pagePreview: 'Page Preview',
    default: 'Default',
    restoreDefaults: 'Restore Defaults',
    orange: 'Orange',
    green: 'Green',
    purple: 'Purple',
    red: 'Red',
    loginBackground: 'Login Background Image',
    loginLogo: 'Login Logo',
    websiteLogo: 'Website Logo',
    replacePicture: 'Replace Image',
    websiteLogoTip:
      'Logo displayed at the top of the website. Recommended size: 48x48. Supports JPG, PNG, GIF. Maximum size: 10MB',
    loginLogoTip:
      'Logo on the right side of the login page. Recommended size: 204x52. Supports JPG, PNG, GIF. Maximum size: 10MB',
    loginBackgroundTip:
      'Left-side background image. Vector graphics recommended size: 576x900; Bitmap recommended size: 1152x1800. Supports JPG, PNG, GIF. Maximum size: 10MB',
    websiteName: 'Website Name',
    websiteNamePlaceholder: 'Please enter the website name',
    websiteNameTip: 'The platform name displayed in the web page tab',
    websiteSlogan: 'Welcome Message',
    websiteSloganPlaceholder: 'Please enter the welcome message',
    websiteSloganTip: 'The welcome message below the product logo',
    defaultSlogan: 'Welcome to MaxKB Intelligent Knowledge Base Q&A System',
    defaultTip: 'Default is the MaxKB platform interface, supports custom settings',
    platformSetting: 'Platform Settings',
    showUserManual: 'Show User Manual',
    showForum: 'Show Forum Support',
    showProject: 'Show Project Address',
    urlPlaceholder: 'Please enter the URL address',
    abandonUpdate: 'Abandon Update',
    saveAndApply: 'Save and Apply',
    fileMessageError: 'File size exceeds 10MB',
    saveSuccess: 'Appearance settings successfully applied'
  },
  email: {
    title: 'Email Setting',
    smtpHost: 'SMTP Host',
    smtpHostPlaceholder: 'Please enter SMTP Host',
    smtpPort: 'SMTP Port',
    smtpPortPlaceholder: 'Please enter SMTP Port',
    smtpUser: 'SMTP User',
    smtpUserPlaceholder: 'Please enter SMTP User',
    sendEmail: 'Send Email',
    sendEmailPlaceholder: 'Please enter Send Email',
    smtpPassword: 'SMTP Password',
    smtpPasswordPlaceholder: 'Please enter SMTP Password',
    test: 'Test Connection',
    enableSSL: 'Enable SSL (if the SMTP port is 465, you usually need to enable SSL)',
    enableTLS: 'Enable TLS (if the SMTP port is 587, you usually need to enable TLS)',
    testSuccess: 'Test Connection Successful'
  }
}
