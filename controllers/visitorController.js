exports.getAllProjects = (req, res) => {
    res.json({ message: "List of all projects" });
};

exports.getProjectDetails = (req, res) => {
    res.json({ message: "Project details" });
};

exports.getComments = (req, res) => {
    res.json({ message: "Project comments" });
};