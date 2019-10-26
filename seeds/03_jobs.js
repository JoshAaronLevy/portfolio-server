exports.seed = function (knex, Promise) {
  return knex('jobs').del()
    .then(function () {
      return knex('jobs').insert([
        {
          id: 1,
          company: 'Accenture',
          title: 'Sr. Tech Delivery Architect',
          startDate: '2018-11-21',
          endDate: '',
          description: {}
        }
      ]);
    }).then(() => knex.raw(`ALTER SEQUENCE jobs_id_seq RESTART WITH 2;`));
};