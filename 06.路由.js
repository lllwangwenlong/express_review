const express = require('express')
const {Router} = require('express')
const router = Router()
const app = express()

let count = 0

router.get('/01', function(req, res, next) {
    ({count} = req.query)
    console.log(count)
    count = parseInt(count)
    console.log(count)
    count += 100
    next()
},function (req, res) {
   res.send(`加了一百后的结果是${count}`)
})

router.post('/02', (req, res) => {

})

app.use('/demo', router)

app.listen(3006)