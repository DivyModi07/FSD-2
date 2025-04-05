const EventEmitter = require('events')
const Event = new EventEmitter()
Event.on('statusCode',(code,msg)=>{
    console.log(`Your Page has ${code} with ${msg}`)
})

Event.emit('statusCode',200,"ok")
