const express = require('express');
const router = express.Router();

const queries = require('../queries/projects');

router.get('/', (request, response, next) => {
  queries.list('projects').then(projects => {
    response.json({
      projects
    });
  }).catch(next);
});

router.get('/:id', (request, response, next) => {
  queries.read(request.params.id).then(project => {
    project
      ?
      response.json({
        project
      }) :
      response.sendStatus(404)
  }).catch(next);
});

router.post('/', (request, response, next) => {
  queries.create(request.body).then(project => {
    response.status(201).json({
      project: project
    });
  }).catch(next);
});

router.delete('/:id', (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.sendStatus(204);
  }).catch(next);
});

router.put('/:id', (request, response, next) => {
  queries.update(request.params.id, request.body).then(project => {
    response.json({
      project: project[0]
    });
  }).catch(next);
});

module.exports = router;
