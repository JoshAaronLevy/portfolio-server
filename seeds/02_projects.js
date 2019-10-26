exports.seed = function (knex, Promise) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
      {
        id: 1,
        name: 'gitbuddy',
        date: 'Oct 2019',
        snippet: `Find a bad movie to watch. Serve data to end-users with custom API's.`,
        description: `Find a bad movie to watch. Serve data to end-users with custom API's.`,
        gifURL: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/projects/React-Logo.png',
        youtubeURL: null,
        deployedURL: 'https://bad-movie-night.firebaseapp.com',
        githubURL: 'https://github.com/joshaaronlevy/bad-movie-night',
        stack: '',
        codeSnippetUrl: ''
      }, {
        id: 2,
        name: 'Portfolio',
        date: 'Dec 2018',
        snippet: `Full CRUD Web Developer portfolio. Built with Vue.js and PostgreSQL.`,
        description: `Full CRUD Web Developer portfolio. Built with Vue.js and PostgreSQL.`,
        gifURL: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/projects/React-Logo.png',
        youtubeURL: null,
        deployedURL: 'https://joshlevy.tech/',
        githubURL: 'https://github.com/JoshAaronLevy/portfolio',
        stack: '',
        codeSnippetUrl: ''
      }, {
        id: 3,
        name: 'Coding Roadmap',
        date: 'Oct 2018',
        snippet: `A blog about all things web development.`,
        description: `A blog about all things web development.`,
        gifURL: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/projects/React-Logo.png',
        youtubeURL: null,
        deployedURL: 'https://codingroadmap.com/',
        githubURL: 'https://github.com/JoshAaronLevy/coding-roadmap',
        stack: '',
        codeSnippetUrl: ''
      }, {
        id: 4,
        name: 'PostureMom',
        date: 'Sep 2018',
        snippet: `Capstone project. Desktop app created with Vue.js, Electron, Google TensorFlow.js Machine Learning, and Google Cloud Functions.`,
        description: `Capstone project. Desktop app created with Vue.js, Electron, Google TensorFlow.js Machine Learning, and Google Cloud Functions.`,
        gifURL: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/projects/React-Logo.png',
        youtubeURL: `https://www.youtube.com/watch?v=M1_SJuy5KPI&feature=youtu.be`,
        deployedURL: null,
        githubURL: 'https://github.com/JoshAaronLevy/posturemom-app/',
        stack: '',
        codeSnippetUrl: ''
      }, {
        id: 5,
        name: 'Bad Movie Night',
        date: 'Jul 2018',
        snippet: `Find a bad movie to watch. Serve data to end-users with custom API's.`,
        description: `Find a bad movie to watch. Serve data to end-users with custom API's.`,
        gifURL: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/projects/React-Logo.png',
        youtubeURL: null,
        deployedURL: 'https://bad-movie-night.firebaseapp.com',
        githubURL: 'https://github.com/joshaaronlevy/bad-movie-night'
      }
    ]);
    }).then(() => knex.raw(`ALTER SEQUENCE projects_id_seq RESTART WITH 6;`));
};