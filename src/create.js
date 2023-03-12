const {User, Blog} = require('./model')

!(async function(){
    // insert into users (...) values (...)
    // 创建两个用户
    const zhangsan = await User.create({
        userName:'zhangsan',
        password:'123',
        nickName:'张三'
    })
    console.log('zhangsan: ' , zhangsan.dataValues)
    const zhangsanId = zhangsan.dataValues.id

    const lisi = await User.create({
        userName:'lisi',
        password:'456',
        nickName:'李四'
    })
    const lisiId = lisi.dataValues.id

    // 创建博客 
    const blog1 = await Blog.create({
        title:'内容1',
        content:' content1',
        userId:zhangsanId,
    })
    const blog2 = await Blog.create({
        title:'内容2',
        content:' content2',
        userId:zhangsanId,
    })
    const blog3 = await Blog.create({
        title:'内容3',
        content:' content3',
        userId:lisiId,
    })
    const blog4 = await Blog.create({
        title:'内容4',
        content:' content4',
        userId:lisiId,
    })
})()