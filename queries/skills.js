const database = require('../db-connection');

module.exports = {
  list() {
    return database('skills').select();
  },
  read(id) {
    return database('skills').select().where('id', id).first();
  },
  create(id) {
    return database('skills')
      .insert()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  update(id) {
    return database('skills')
      .update()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('skills').delete().where('id', id);
  }
};
