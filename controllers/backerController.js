exports.signupBacker = (req, res) => {
    res.json({ message: "Backer signup successful" });
};

exports.backProject = (req, res) => {
    res.json({ message: "Project backed successfully" });
};

exports.selectReward = (req, res) => {
    res.json({ message: "Reward selected" });
};