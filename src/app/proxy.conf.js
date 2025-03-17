const PROXY_CONFIG = [
    {
      context: ['/api'],
      target: 'https://yogavidyaschool.com:3000',
      secure: false,
      changeOrigin: true,
      logLevel: 'debug'
    }
  ];
  
  module.exports = PROXY_CONFIG;
  