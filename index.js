'use strict';

module.exports = function(t, _) {

  t.alias('npm_global_modules', function() {
    console.log(`
      npm install -g npm cnpm
      npm install -g yo bower gulp
      npm install -g koa-ship-cli
      npm install -g nodemon pm2 shipit-cli
      npm install -g open-doc npminfo npmlist
      npm install -g http-server jianyi
    `);
  });

};