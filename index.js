'use strict';

const path = require('path');

module.exports = function(_) {
  _.require(path.join(__dirname, 'commands'));
  _.require(path.join(__dirname, 'documents'));
  _.require(path.join(__dirname, 'sites'));

  require('./mac')(_);

  alias('version_semver', 'http://semver.org/lang/zh-CN/');
};