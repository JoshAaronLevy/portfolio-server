const express = require('express');
const router = express.Router();

const queries = require('../queries/jobs');

router.get('/', (request, response, next) => {
  queries.list('jobs').then(jobs => {
    response.json({
      jobs
    });
  }).catch(next);
});

router.get('/:id', (request, response, next) => {
  queries.read(request.params.id).then(job => {
    job
      ?
      response.json({
        job
      }) :
      response.sendStatus(404)
  }).catch(next);
});

router.post('/', (request, response, next) => {
  queries.create(request.body).then(job => {
    response.status(201).json({
      job: job
    });
  }).catch(next);
});

router.delete('/:id', (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.sendStatus(204);
  }).catch(next);
});

router.put('/:id', (request, response, next) => {
  queries.update(request.params.id, request.body).then(job => {
    response.json({
      job: job[0]
    });
  }).catch(next);
});

module.exports = router;
