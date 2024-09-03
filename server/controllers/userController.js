const User = require('../models/User');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    };


const getSingleUser = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await User.findOne({ where: { username } });
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { getAllUsers, getSingleUser
 };