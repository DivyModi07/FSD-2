// Write your name and roll no. in student.txt file ,append data having email id in same file and then read that particular data using Async mechanism in ES-6 form.

var fs = require('fs')

fs.writeFile('student.txt','Name : Divy \nRoll No. :29 \n', (err)=>{
    if(err) {
        console.log("Error");
    }
    else{
        console.log("File created \n");
        fs.appendFile('student.txt','Email : divymodi1235@gmail.com', (err)=>{
            if(err){
                console.log("Error");
            }
            else{
                fs.readFile("student.txt",'utf-8',(err,data)=>{
                    if(err){
                        console.log("Error")
                    }
                    else{
                        console.log(data)
                        console.log("\nProgram ended")
                    }
                })
            }
        })
    }
})

