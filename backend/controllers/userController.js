const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { htmlToText } = require('html-to-text');

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({name:user.name,email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const {name,email, password} = req.body

  try {
    const user = await User.signup(name,email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({name:user.name,email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// send email  

const send = async (req, res) => {
  const {recipient,text}= req.body
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mohamedkhassar775@gmail.com',
      pass: 'sqhxfeyndqrlghtg'
    }
  });
  
  const mailOptions = {
    from: 'Alo couscous',
    to: recipient,
    subject: 'Order Confirmation - Order ID #12345',
    text:htmlToText(text)
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
   console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      // do something useful 
    }
  });
}

module.exports = { signupUser, loginUser,send }