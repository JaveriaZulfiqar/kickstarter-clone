const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: String,
    subcategory: String,
    location: String,
    fundingGoal: Number,
    currentFunding: { type: Number, default: 0 },
    description: String,
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    rewards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reward' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);