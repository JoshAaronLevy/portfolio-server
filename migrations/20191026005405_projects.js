exports.up = function (knex, Promise) {
  return knex.schema.createTable('projects', projects => {
    projects.increments();
    projects.string('name');
    projects.date('date');
    projects.string('snippet');
    projects.text('description');
    projects.string('gifUrl');
    projects.string('youtubeUrl');
    projects.string('deployedUrl');
    projects.string('githubUrl');
    projects.json('stack');
    projects.string('codeSnippetUrl');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};