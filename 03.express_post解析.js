const express = require('express')//引入express模块
const app = express() //生成一个APP实例
const path = require('path')
const qs = require('qs')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './post请求表单.html'))
})

app.post('/post',(req, res) => {

    // let data = ''
    // req.on('data', function (chunk) {
    //     data+=chunk
    // })
    // req.on('end', function () {
    //     console.log(qs.parse(data))
    //     username=21212121&password=2121212121
    //     let obj = qs.parse(data)
    //     return obj
    //     let obj1 = {
    //         first: 'one',
    //         second: 'two'
    //     }
    //     console.log(qs.stringify(obj1))
    //     first=one&second=two
    // })

    const {username, password}  = req.body

    res.send(
        `
        <h1>你的用户名是: ${username}</h1>
        <h2>你的密码是: ${password}</h2>
        `
    )
})

app.listen(3003)