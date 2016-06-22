'use strict';

let npm_install_global_modules = `
npm install -g npm cnpm
npm install -g yo bower gulp
npm install -g koa-ship-cli babel-cli
npm install -g nodemon pm2 shipit-cli
npm install -g open-doc npminfo npmlist
npm install -g http-server sloc
`;

module.exports = function(_) {
  note_alias('npm_install_global_modules', npm_install_global_modules);
};