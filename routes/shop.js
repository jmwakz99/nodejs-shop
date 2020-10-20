const express = require('express')


const Router = express.Router()

const shopControllers = require('../controllers/shop')

Router.get('/', shopControllers.shopPage)
Router.get('/cart', shopControllers.cartPage)

module.exports = Router;