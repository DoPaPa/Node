const express = require('express')
const app = express()

// 加载路由模块
const router = require('./router')

// 挂在路由容器到 app 应用程序中使路由生效
app.use(router)
app.listen(3000, () => console.log('Example app listening on port 3000'))
