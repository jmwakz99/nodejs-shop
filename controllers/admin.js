exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: "Add Product",
        path: '/add-product'
    })
}


exports.postAddProduct = (req, res, next) => {
    res.redirect('/')

}

exports.getAdminProducts = (req, res, next) => {
    res.render('admin-products', {
        pageTitle: 'Admin Products',
        path: '/admin-products'
    })

}