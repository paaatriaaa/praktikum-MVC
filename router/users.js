const express = require('express')
// const user = require('../controllers/user')
const router = express.Router()
// const usercontroller = require('../controllers/user')

const userscontroller = require('../controllers/users')

router.get('/users', userscontroller.index)
  
  router.post('/users', userscontroller.store)
  
  router.put('/users/:id', userscontroller.update)

  router.delete('/users/:id', userscontroller.delete)
  
  module.exports = router