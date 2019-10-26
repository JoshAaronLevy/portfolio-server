const express = require('express');
const router = express.Router();

const queries = require('../queries/experiences');

router.get('/', (request, response, next) => {
  queries.list('experiences').then(experiences => {
    response.json({
      experiences
    });
  }).catch(next);
});

router.get('/:id', (request, response, next) => {
  queries.read(request.params.id).then(experience => {
    experience
      ?
      response.json({
        experience
      }) :
      response.sendStatus(404)
  }).catch(next);
});

router.post('/', (request, response, next) => {
  queries.create(request.body).then(experience => {
    response.status(201).json({
      experience: experience
    });
  }).catch(next);
});

router.delete('/:id', (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.sendStatus(204);
  }).catch(next);
});

router.put('/:id', (request, response, next) => {
  queries.update(request.params.id, request.body).then(experience => {
    response.json({
      experience: experience[0]
    });
  }).catch(next);
});

module.exports = router;
