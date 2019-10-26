exports.up = function (knex, Promise) {
  return knex.schema.createTable('skills', skills => {
    skills.increments();
    skills.string('name');
    skills.string('img', [500]);
    skills.string('category');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('skills');
};
