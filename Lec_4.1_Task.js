var fs =require('fs')
data = {"Details":[{'fname':'Divy'},{'lname':'Modi'}]}

// fs.writeFileSync('user.txt',JSON.stringify(data))
fileData = fs.readFileSync('user.txt','utf-8')
console.log(fileData)
console.log(JSON.parse(fileData).Details[0].fname)
console.log(JSON.parse(fileData).Details[1].lname)
console.log("My name is ",JSON.parse(fileData).Details[0].fname,JSON.parse(fileData).Details[1].lname)