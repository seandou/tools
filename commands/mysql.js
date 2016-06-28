'use strict';

const mysql_grant = `
grant all privileges on dbname.* to 'username'@'%' identified by 'password' with grant option;
grant all privileges on dbname.* to 'username'@'localhost' identified by 'password' with grant option;
`;

module.exports = function(_) {
  note_alias('mysql_grant', mysql_grant);
};