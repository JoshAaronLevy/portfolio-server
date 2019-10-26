exports.seed = function (knex, Promise) {
  return knex('skills').del()
    .then(function () {
      return knex('skills').insert([
        {
          id: 1,
          name: 'Angular 6+',
          img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/Angular-Logo.png',
          category: 'Front-End'
        }
      ]);
    }).then(() => knex.raw(`ALTER SEQUENCE skills_id_seq RESTART WITH 2;`));
};