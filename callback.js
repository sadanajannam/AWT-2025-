const userLeft = true
const userWatchingme = true
function watchagain(callback , errorcallback){
    if(userLeft){
        errorcallback({
            name: 'User Left',
            message: ':('
        })
    }else if (userWatchingme){
        errorcallback({
            name: 'User Watching Me ',
            message: 'User Details displayed'
        })
    }else{
        callback('Thumbs up and Bye')
    }
}
watchagain((message) => {
    console.log('Success: ', +message)
},(error) => {
    console.log(error.name + '' +error.message)
})