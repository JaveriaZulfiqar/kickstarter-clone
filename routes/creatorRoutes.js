const express = require('express');
const router = express.Router();
const { signupCreator, createProject, getProjects } = require('../controllers/creatorController');

router.post('/signup', signupCreator);
router.post('/projects', createProject);
router.get('/projects', getProjects);

module.exports = router;