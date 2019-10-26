const database = require('../db-connection');

module.exports = {
  list() {
    return database('experiences').select();
  },
  read(id) {
    return database('experiences').select().where('id', id).first();
  },
  create(id) {
    return database('experiences')
      .insert()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  update(id) {
    return database('experiences')
      .update()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('experiences').delete().where('id', id);
  }
};