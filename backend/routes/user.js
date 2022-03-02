const express = require('express');
const router = express.Router();

const User = require('../models/user.model');


// ROUTING

// get all users
router.route('/').get((req, res) =>{
  User.find()
      .then(users =>res.json(users))
      .catch(error => res.status(400).json('Error ' + error))
});

// get user by id
router.route('/:id').get((req, res) =>{
  User.findById(req.params.id)
      .then(users =>res.json(users))
      .catch(error => res.status(400).json('Error ' + error))
});

// add user
router.route('/add').post((req, res) =>{
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({username, email, password});

  newUser.save()
         .then(() => res.json('User added!!'))
         .catch(error => res.status(400).json('Error ' + error))
});

// update user details
router.route('/update/:id').post((req, res) =>{
  User.findByIdAndUpdate(req.params.body)
      .then(user =>{
        user.username = req.body.username
        user.email = req.body.email
        user.password = req.body.password

        user.save()
            .then(() => res.json('User updated successfully!!'))
            .catch(error => res.status(400).json('Error ' + error))
      }).catch(error => res.status(400).json('Error ' + error))
});

// delete user
router.route('/:id').delete((req, res) =>{
  User.findByIdAndDelete(req.params.id)
      .then(() => res.json('User deleted!!'))
      .catch(error => res.status(400).json('Error ' + error))
});

module.exports = router;
