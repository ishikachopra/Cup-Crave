const express = require('express');
const router = express.Router();
const {handleUserLogin,handleUserSignup,handleGetUser,handleUpdateInfo} = require('../controllers/user')

router.post('/signup',handleUserSignup);
router.post('/login',handleUserLogin);
router.get('/profile',handleGetUser);
router.put('/profile',handleUpdateInfo);

module.exports=router;