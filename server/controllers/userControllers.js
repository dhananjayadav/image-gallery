const User = require("../models/userModel");

const getUserByEmail = async(req, res)=> {
    try {
        const { email } = req.params;
        const user = await User.findOne({ email });
        res.status(200).json({ user });
    }catch(err){
        res.status(400).json({ err });
    }
}

const getUsersByName = async(req, res)=> {
    try {
        const { name } = req.params;
        const user = await User.find({ name });
        res.status(200).json({ user });
    }catch(err){
        res.status(400).json({ err });
    }
}

const createUser = async(req, res)=> {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password });
        res.status(200).json({ user });
    }catch(err){
        res.status(400).json({ err });
    }
}

const updateUser = async(req, res)=> {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOneAndUpdate(
            { email }, 
            { name, password },
            { new: true }
        );
        res.status(200).json({ user });
    }catch(err){
        res.status(400).json({ err });
    }
}

const upsertUser = async(req, res)=> {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOneAndUpdate(
            { email }, 
            { name, password, email },
            { new: true, upsert: true }
        );
        res.status(200).json({ user });
    }catch(err){
        res.status(400).json({ err });
    }
}

const deleteUser = async(req, res)=> {
    try {
        const { email, password } = req.body;
        const user = await User.deleteOne({ email, password });
        if(user.deletedCount){
            res.status(200).json({ user, msg: 'User deleted Successfully' });
        }else{
            res.status(400).json({ user, msg: 'Cannot delete User - User Not Found' })
        }
    }catch(err){
        res.status(400).json({ err });
    }
}

module.exports = {
    getUserByEmail,
    getUsersByName,
    createUser,
    updateUser,
    upsertUser,
    deleteUser
}