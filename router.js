//路由模块

// 1、加载express
const express = require('express')

// 2、创建一个路由容器
const router = express()

// 3、配置路由表
router.get('/', (req, res) => {
  res.send('hello world')
})

router.get('/signin', (req, res) => {
  res.send('singnin')
})

// 4、到处路由容器
module.exports = router

// 5、在app.js中加载路由容器
// app.use(router)
