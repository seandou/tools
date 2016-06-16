'use strict';

const path = require('path');

module.exports = function(_) {
  _.require(path.join(__dirname, 'commands'));
  _.require(path.join(__dirname, 'documents'));
  _.require(path.join(__dirname, 'sites'));
};