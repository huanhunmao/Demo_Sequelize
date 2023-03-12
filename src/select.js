const {User, Blog}  = require('./model')

!(async function(){
    // 查询一条数据 
    // const zhangsan = await  User.findOne({
    //     where:{
    //         userName:'zhangsan'
    //     }
    // })
    // console.log('zhangsan',zhangsan.dataValues)

    // 查询指定列 
    // const zhangsan = await User.findOne({
    //     attributes:['userName','nickName'],
    //     where:{
    //         userName:'zhangsan'
    //     }
    // })
    // console.log('zhangsan',zhangsan.dataValues)

    // 查询列表 张三博客 
    // const zhangsanBlogList = await Blog.findAll({
    //     where:{
    //         userId:1
    //     },
    //     order:[
    //         ['id','desc'] // id 倒序排列
    //     ]
    // })
    // console.log('zhangsanBlogList',
    // zhangsanBlogList.map(blog => blog.dataValues))

    // 分页
    // const blogPageList = await Blog.findAll({
    //     limit:2, //限制本次查询2条
    //     offset:2, // 跳过多少条 
    //     order:[
    //         ['id','desc'], 
    //     ]
    // })
    // console.log('blogPageList',
    // blogPageList.map(blog => blog.dataValues))
    
    // 查询总数 total 
    // const blogTotal = await Blog.findAndCountAll({
    //     limit:2,
    //     offset:0,
    //     order:[
    //         ['id','desc'],
    //     ]
    // })
    // console.log('blogTotal',blogTotal.count) // 总数 
    // console.log('blogTotalCount',
    // blogTotal.rows.map(blog => blog.dataValues))

    // 连表查询 1 
    // const blogListWithUser = await Blog.findAndCountAll({
    //     order:[
    //         ['id','desc']
    //     ],
    //     include:[
    //         {
    //             model:User,
    //             attributes:['userName','nickName'],
    //             where:{
    //                 userName:'zhangsan'
    //             }
    //         }
    //     ]
    // })
    // console.log('blogListWithUser',blogListWithUser.count,
    // blogListWithUser.rows.map(blog => {
    //     const blogVal = blog.dataValues
    //     blogVal.user = blogVal.user.dataValues // Blog 里包含 user 属性 
    //     return blogVal
    // })
    // )

    // 连表查询2 
    const UserListWithBlog = await User.findAndCountAll({
        attributes:['userName','nickName'],
        where:{
            userName:'zhangsan'
        },
        include:[
            {model:Blog}
        ]
    })
    console.log('UserListWithBlog',UserListWithBlog.count,
    JSON.stringify(UserListWithBlog.rows.map(user => {
        const userVal = user.dataValues
        userVal.blogs = userVal.blogs.map(blog => blog.dataValues) //
        return userVal
    })
    ))
})()