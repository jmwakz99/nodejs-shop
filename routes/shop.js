const express = require('express')


const Router = express.Router()

const shopControllers = require('../controllers/shop')

Router.get('/', shopControllers.shopPage)

module.exports = Router;