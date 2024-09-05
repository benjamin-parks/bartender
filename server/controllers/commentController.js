const Comment = require('../models/Comment');

const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.findAll();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

const getSingleComment = async (req, res) => {
    try {
        const { id} = req.params;
        const comment = await Comment.findOne({ where: { id} });
        res.status(200).json(comment);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllComments, getSingleComment};