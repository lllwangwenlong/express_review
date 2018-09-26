const express = require('express')
const app = express()
const path = require('path')
let count = 998

setInterval(() => {
    count += 3
}, 3000)

app.set('views', path.resolve(__dirname, './views'))
//设置模板存放的位置
app.set('view engine', 'ejs')
//设置模板引擎为ejs

app.get('/index', (req, res) =>{
    res.render('index', {count})
})

app.get('/second', (req, res) =>{
    res.render('second')
})

app.listen(3007)