const Project = require('../models/Project');
const User = require('../models/User');

exports.signupCreator = async (req, res) => {
    // Placeholder signup logic
    res.json({ message: 'Creator signup successful' });
};

exports.createProject = async (req, res) => {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
};

exports.getProjects = async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
};