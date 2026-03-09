const express = require('express');
const router = express.Router();
const backerController = require('../controllers/backerController');

// signup investor/backer
router.post('/signup', backerController.signupBacker);

// back a project
router.post('/projects/:id/back', backerController.backProject);

// select reward
router.post('/projects/:id/reward', backerController.selectReward);

module.exports = router;