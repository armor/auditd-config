const baseConfig = require('@cncsc/semantic-release-config/base');

for (let i = 0; i < baseConfig.plugins.length; i++) {
  if (baseConfig.plugins[i][0] === '@semantic-release/github') {
    baseConfig.plugins[i][1] = {
      successComment: false,
      failComment: false,
      assets: [{
        path: 'auditd-config.zip',
        label: 'Quantum Security Auditd Config'
      }]
    };
  }
}

module.exports = baseConfig;
