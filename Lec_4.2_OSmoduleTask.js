var fs = require('fs')
var os = require('os')

// Write node.js script to create file named “temp.txt”. Now, check if available physical memory of the system is greater than 1 GB then print message “Sufficient Memory” in the file, else print message “Low Memory” in file.

// // file1 = fs.writeFileSync('temp.txt','')
// fileSpace = os.freemem()/1024/1024/1024
// console.log(fileSpace)
// if(fileSpace > 1){
//     fs.writeFileSync('temp.txt',"Sufficient Memory")
// }
// else{
//     fs.writeFileSync('text.txt',"Low Memory")
// }

// ---------------------------------------------------------------------------------------------------------------------------------------

// Write node.js script to create a folder named “AA” at temp folder. Also, create file named “temp1.txt” inside “AA” folder. Now, check if working on 32 bit plateform then print You are working on windows 32 bit else print You are working on windows 64 bit.

// temp = os.tmpdir()
// platform = os.platform()
// // console.log(fs.mkdirSync(temp+'/AA'))
// console.log(platform)
// console.log(temp)
// if (platform == 'win32'){
//     fs.writeFileSync(temp +'/AA/temp1.txt',"You are working on windows 32 bit")
// }
// else{
//     fs.writeFileSync(temp +'/AA/temp1.txt',"You are not working on windows 32 bit")
// }

// ---------------------------------------------------------------------------------------------------------------------------------------

// Write node.js script to check whether the file extension is  .txt or not.

