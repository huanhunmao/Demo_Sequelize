const Sequelize = require('sequelize')
const seq = require('./seq')

// 创建 users 表 
const User = seq.define('user',{
    // 无需创建 id  会自增 
    userName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    nickName:{
        type:Sequelize.STRING,
    }
})

// 创建 Blog 表
const Blog = seq.define('blog',{
    title:{
        type:Sequelize.STRING,
        allowNull:false},
    content:{
        type:Sequelize.STRING,
        allowNull:false
    },
    userId:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})
// 创建外键 关联 
Blog.belongsTo(User,{
    // 创建外键 Blog.userId -->  User.id
    foreignKey:'userId'
})

User.hasMany(Blog,{
// 创建外键 Blog.userId -->  User.id
foreignKey:'userId'
})

// 第二种简单粗暴方式 不推荐 
// Blog.belongsTo(User)    

module.exports = {
    User,
    Blog
}