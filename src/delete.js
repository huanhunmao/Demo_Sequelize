const {User, Blog} = require('./model')

!(async function(){
    // 删除一条微博
        // const deleteOneBlog = await Blog.destroy({
        //     where:{
        //         id:4
        //     }
        // })
        // console.log('deleteOneBlog',deleteOneBlog)

    // 删除一个 用户 
    const deleteOneUser = await User.destroy({
        where:{
            id:1 // zhangsan
        }
    })
    console.log('deleteOneUser',deleteOneUser)
})()