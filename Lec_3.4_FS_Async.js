var fs = require('fs')

fs.writeFile('text.txt','Welecome to Async World', function(err){
    if(err) {
        console.log("Error");
    }
    else{
        console.log("File created");
        fs.readFile('text.txt','utf-8',function (err,data){
            if(err) {
                console.error(err)
            }
            else{
                console.log(data)
                console.log('Reading Completed')
                console.log('Program Ended')
            }
        })
    }
})

