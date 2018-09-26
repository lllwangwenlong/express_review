const express = require('express')
const app = express()
const path = require('path')




app.set('views', path.resolve(__dirname, './views'))
//设置模板存放的位置
app.set('view engine', 'ejs')
//设置模板引擎为ejs

app.get('/index', (req, res) =>{
    res.render('redirect')
})

app.get('/welcome', (req, res) => {
    res.render('welcome')
})

app.post('/login', (req, res) => {
    res.redirect('/welcome')
})

app.listen(3009)