const express = require('express')//引入express模块
const app = express() //生成一个APP实例
const path = require('path')

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './get请求表单.html'))
})

app.get('/get',(req, res) => {
    const {username, password} = req.query
    res.send(
        `
        <h1>你的用户名是: ${username}</h1>
        <h2>你的密码是: ${password}</h2>
        `
    )
})

app.listen(3002)