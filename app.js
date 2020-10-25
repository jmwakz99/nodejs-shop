const path = require('path');

const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")


const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes)
app.use(shopRoutes)


// This route handles pages not found in the app
app.use((req, res, next) => {
    res.render('404', {
        pageTitle: 'Page Not Found!',
        path: '/404'
    })
})



app.listen(3000)