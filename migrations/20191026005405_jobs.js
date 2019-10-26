exports.up = function (knex, Promise) {
  return knex.schema.createTable('jobs', jobs => {
    jobs.increments();
    jobs.string('company');
    jobs.string('title');
    jobs.date('startDate');
    jobs.date('endDate');
    jobs.json('description');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('jobs');
};