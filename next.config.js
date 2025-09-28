const { execSync } = require('child_process');

module.exports = {
  env: {
    NEXT_PUBLIC_BUILD_DATE: new Date().toISOString().split('T')[0],
    NEXT_PUBLIC_LAST_COMMIT: execSync('git log -1 --format=%cd --date=short').toString().trim(),
  },
};