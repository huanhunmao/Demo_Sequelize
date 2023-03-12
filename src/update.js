const {User} = require('./model')

!(async function(){
    const updateUser = await User.update(
        {nickName:'张三777'},
        { 
            where:{
                userName:'zhangsan'
        }
    })
    console.log('updateUser', updateUser[0] > 0 ) 
})()