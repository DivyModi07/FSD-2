const EventEmitter = require('events')
const Event = new EventEmitter()
Event.on('SayName',()=>{
    console.log('First Name')
})
Event.on('SayName',()=>{
    console.log('Middle Name')
})
Event.on('SayName',()=>{
    console.log('Last Name')
})
Event.emit('SayName')
