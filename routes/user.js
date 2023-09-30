

const express = require('express')
const {getUserInfo, createUser} = require('../controllers/user')

const router = express.Router();

//post, get, update, delete
router.get('/getUserInfo', getUserInfo)
router.post('/createUser', createUser)




module.exports = router