const express = require('express');
const router = express.Router();
const visitorController = require('../controllers/visitorController');

// View all projects
router.get('/', visitorController.getAllProjects);

// View single project
router.get('/:id', visitorController.getProjectDetails);

// View comments
router.get('/:id/comments', visitorController.getComments);

module.exports = router;