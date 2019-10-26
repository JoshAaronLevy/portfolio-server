const database = require('../db-connection');

module.exports = {
  list() {
    return database('jobs').select();
  },
  read(id) {
    return database('jobs').select().where('id', id).first();
  },
  create(id) {
    return database('jobs')
      .insert()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  update(id) {
    return database('jobs')
      .update()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('jobs').delete().where('id', id);
  }
};