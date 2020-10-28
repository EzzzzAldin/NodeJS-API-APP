const router = require('express').Router();

const apiController = require('../controller/api.controller');

router.get('/ninjas', apiController.getNinja);

router.post('/ninjas', apiController.postNinja);

router.put('/ninjas/:id', apiController.putNinja);

router.delete('/ninjas/:id', apiController.deleteNinja);


module.exports = router;