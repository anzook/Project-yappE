
const config = {
  'development': {
    'username': 'root',
    'password': 'root', // process.env.MYSQL_ROOT_PASS,
    'database': 'dog_db',
    'host': '127.0.0.1',
    'dialect': 'mysql',
    'operatorsAliases': false,
  },
  'test': {
    'username': 'root',
    'password': null,
    'database': 'database_test',
    'host': '127.0.0.1',
    'dialect': 'mysql',
    'operatorsAliases': false,
  },
  'production': {
    'username': 'root',
    'password': null,
    'database': 'database_production',
    'host': '127.0.0.1',
    'dialect': 'mysql',
    'operatorsAliases': false,
  },
};

module.exports = config;
