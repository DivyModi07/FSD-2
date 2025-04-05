fs = require('fs')
const EventEmitter = require('events')
const Event = new EventEmitter()

Event.on('circle',(r)=>{
    if(r<0){
        console.log('Radius must be positive')
    }
    else{
        console.log('Perimeter of circle : ',2*3.14*r)
    }
})

Event.on('square',(s)=>{
    if(s<0){
        console.log('Side of square must be positive')
    }
    else{
        console.log('Perimeter of square : ',4*s)
    }
})

Event.emit('circle',2)
Event.emit('square',-2)
