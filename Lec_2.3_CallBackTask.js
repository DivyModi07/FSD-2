function currentTime(){
    const ts = new Date().toLocaleTimeString() // .toLocaleTimeString('en-In',{hour12:false}) 
    console.log(ts)
}

currentTime()
setInterval(currentTime,1000)