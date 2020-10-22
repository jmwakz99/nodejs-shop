exports.shopPage = (req, res, next) => {
    res.render('shop', {
        pageTitle: 'Shop',
        path: "/"

    })

}


exports.cartPage = (req, res, next) => {
    res.render('cart', {
        pageTitle: 'Your Cart',
        path: "/cart"

    })

}


exports.orderPage = (req, res, next) => {
    res.render('orders', {
        pageTitle: 'Your Orders',
        path: "/orders"

    })

}