const Sequelize = require('sequelize')

// 开发环境
const conf = {
    host: 'localhost',
    dialect: 'mysql'
}

// 线上环境 使用连接池
// conf.pool = {
//     max: 5,
//     min: 0, 
//     idle:10000, // 10s 内没有连接 则被释放 
// }

const seq = new Sequelize('like_weibo','root','123456',conf)

// 测试链接 
// seq.authenticate().then(() => console.log('ok')).catch((e) => console.log(e))

module.exports = seq