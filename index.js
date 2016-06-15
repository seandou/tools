'use strict';

const commands = require('./commands');

module.exports = function(t, _) {

  t.alias('npm_install_global_modules', commands.npm.install_global_modules);

};