const express = require('express')//引入express模块
const app = express() //生成一个APP实例
const path = require('path')
const formidable = require('formidable')

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './图片上传.html'))
})

app.post('/upload',(req, res) => {
    const form = new formidable.IncomingForm()
    //新建一个表单管理对象
    form.keepExtensions = true;
    //是否保存拓展名
    form.maxFieldsSize = 4 * 1024 * 1024;
    //图片大小
    form.uploadDir = path.resolve(__dirname, './public')
    //设置上传图片的缓存位置
    form.parse(req, function(err, fields, files) {
        console.log('files', files)
    });
    form.on('end', function () {
        res.send('图片上传成功')
    })
})

app.listen(3004)