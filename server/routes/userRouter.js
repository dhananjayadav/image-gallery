const express = require("express");
const { getUserByEmail, getUsersByName, createUser, updateUser, upsertUser, deleteUser } = require("../controllers/userControllers");
const userRouter = express.Router();

userRouter.get('/user-email/:email', getUserByEmail)
userRouter.get('/user-name/:name', getUsersByName)
userRouter.post('/create-user', createUser)
userRouter.patch('/update-user', updateUser)
userRouter.put('/upsert-user', upsertUser)
userRouter.delete('/delete-user', deleteUser)

module.exports = {
    userRouter
}