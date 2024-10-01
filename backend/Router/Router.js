const express = require('express');
const Login = require('../Controller/Login');
const { signup } = require('../Controller/Signup');



const router = express.Router();


router.route('/login').post( Login);
router.route('/signup').post( signup);

module.exports =router