'use strict';

const mysql_grant = `
grant all privileges on advert.* to 'advert'@'%' identified by 'advert' with grant option;
grant all privileges on advert.* to 'advert'@'localhost' identified by 'advert' with grant option;
`;

module.exports = function(_) {
  note_alias('mysql_grant', mysql_grant);
};