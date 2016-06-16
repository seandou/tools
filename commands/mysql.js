'use strict';

const mysql_grant = `
create user 'username'@'%' identified by 'password';
grant all privileges on dbname.* to 'user'@'%';
grant all privileges on dbname.* to 'user'@'localhost' identified by 'password' with grant option;
`;

module.exports = function(_) {
  note_alias('mysql_grant', mysql_grant);
};