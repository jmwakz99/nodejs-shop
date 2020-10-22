const express = require('express')


const Router = express.Router()

const shopControllers = require('../controllers/shop')

Router.get('/', shopControllers.shopPage)
Router.get('/cart', shopControllers.cartPage)
Router.get('/orders', shopControllers.orderPage)

module.exports = Router;