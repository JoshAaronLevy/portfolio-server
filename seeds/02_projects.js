exports.seed = function (knex, Promise) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
      {
        id: 1,
        name: 'gitbuddy',
        date: '2019-10-20',
        snippet: `Find a bad movie to watch. Serve data to end-users with custom API's.`,
        description: `Find a bad movie to watch. Serve data to end-users with custom API's.`,
        gifUrl: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/projects/React-Logo.png',
        youtubeUrl: null,
        deployedUrl: 'https://bad-movie-night.firebaseapp.com',
        githubUrl: 'https://github.com/joshaaronlevy/bad-movie-night',
        stack: {},
        codeSnippetUrl: ''
      }, {
        id: 2,
        name: 'Portfolio',
        date: '2018-11-01',
        snippet: `Full CRUD Web Developer portfolio. Built with Vue.js and PostgreSQL.`,
        description: `Full CRUD Web Developer portfolio. Built with Vue.js and PostgreSQL.`,
        gifUrl: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/projects/React-Logo.png',
        youtubeUrl: null,
        deployedUrl: 'https://joshlevy.tech/',
        githubUrl: 'https://github.com/JoshAaronLevy/portfolio',
        stack: {},
        codeSnippetUrl: ''
      }, {
        id: 3,
        name: 'Coding Roadmap',
        date: '2018-10-20',
        snippet: `A blog about all things web development.`,
        description: `A blog about all things web development.`,
        gifUrl: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/projects/React-Logo.png',
        youtubeUrl: null,
        deployedUrl: 'https://codingroadmap.com/',
        githubUrl: 'https://github.com/JoshAaronLevy/coding-roadmap',
        stack: {},
        codeSnippetUrl: ''
      }, {
        id: 4,
        name: 'PostureMom',
        date: '2018-09-15',
        snippet: `Capstone project. Desktop app created with Vue.js, Electron, Google TensorFlow.js Machine Learning, and Google Cloud Functions.`,
        description: `Capstone project. Desktop app created with Vue.js, Electron, Google TensorFlow.js Machine Learning, and Google Cloud Functions.`,
        gifUrl: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/projects/React-Logo.png',
        youtubeUrl: `https://www.youtube.com/watch?v=M1_SJuy5KPI&feature=youtu.be`,
        deployedUrl: null,
        githubUrl: 'https://github.com/JoshAaronLevy/posturemom-app/',
        stack: {},
        codeSnippetUrl: ''
      }, {
        id: 5,
        name: 'Bad Movie Night',
        date: '2018-07-12',
        snippet: `Find a bad movie to watch. Serve data to end-users with custom API's.`,
        description: `Find a bad movie to watch. Serve data to end-users with custom API's.`,
        gifUrl: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/projects/React-Logo.png',
        youtubeUrl: null,
        deployedUrl: 'https://bad-movie-night.firebaseapp.com',
        githubUrl: 'https://github.com/joshaaronlevy/bad-movie-night'
      }
    ]);
    }).then(() => knex.raw(`ALTER SEQUENCE projects_id_seq RESTART WITH 6;`));
};