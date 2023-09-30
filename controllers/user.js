
const UserInfo = require('../models/user.js')


const getUserInfo = async (req, res) => {
      try {
       const userInfo = await UserInfo.find({})
       res.status(200).json(userInfo)
      } catch (error) {
      return res.status(500).json({message: error.message})
      }
}

const createUser = async (req, res) => {
      try {
       const createUser = await UserInfo.create(req.body)
       res.status(201).json(createUser)
      } catch (error) {
      return res.status(500).json({message: error.message})
      }
}





module.exports = {getUserInfo, createUser}