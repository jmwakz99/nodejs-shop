const express = require('express')

const adminControllers = require('../controllers/admin')


const Router = express.Router();

Router.get('/add-product', adminControllers.getAddProduct)
Router.get('/admin-products', adminControllers.getAdminProducts)
Router.post('/add-product', adminControllers.postAddProduct)


module.exports = Router;