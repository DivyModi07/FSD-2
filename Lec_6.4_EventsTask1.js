fs = require('fs')
const EventEmitter = require('events')
const Event = new EventEmitter()
Event.on('write',()=>{
    fs.writeFile('new.txt','This is data \n', ()=>{
        console.log('Write completed')
        Event.emit('append')
    })
})
Event.on('append',()=>{
    fs.appendFile('new.txt','That is data', ()=>{
        console.log('Append completed')
        Event.emit('read')
    })
})
Event.on('read',()=>{
    fs.readFile('new.txt','utf-8', (e,data)=>{
        console.log(data)
        console.log('Thanks for using my program')
        console.log('Read completed')
    })
})

Event.emit('write')
