// ------------------------------------------------------------------------------------
// Task-1

// const a= {
//     "Datastructures":

//     [

//         {

//              "Name": "tree",

//             "course":"Intro",

//             "content":["1","B","C"]

//         },

//         {

//             "Name": "tree1",

//             "course":"Intro1",

//             "content":["1","B","C","d"]

//         }

//     ],

//     "xyz":

//     {

//         "Name":"Graphics",

//         "Topic":["BFS","CDF","Sorting"],

//     }

//   }

//   Task-1
//   console.log(a.Datastructures[1].Name)
//   console.log(a.Datastructures[0].Name)
//   console.log(a.xyz.Name)
//   console.log(a.xyz.Topic)
//   console.log(a.xyz.Topic[0])
//   console.log(a.Datastructures[1])
//   console.log(a.xyz.data)
//   console.log(a.xyz)

// ----------------------------------------------------------------------------


// ----------------------------------------------------------------------------
// Task-2

// const sub =

// {

// "FSD": [

// {

// "Topic": "HTML",

// "course": "Beginer",

// "content": ["tags", "table", "form"],

// },

// {

// "Topic": "CSS",

// "course": "Beginer",

// "content": ["tags", "table", "form"]

// }

// ]};

// for(x in sub.FSD){
//     for(y in sub.FSD[x]){
//         console.log(sub.FSD[x][y])
//     }
// }

// for(i of sub.FSD){
//     console.log(i.Topic)
//     console.log(i.course)
//     console.log(i.content)
// }

// ------------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// Task-3

// myObj = {

//     "name" : "John",

//     "age" : 30,

//     "cars" : [

//                 { "name" : "Ford",  "models":[ "Fiesta", "Focus", "Mustang" ] },

//                 { "name" : "BMW", "models" : [ "320", "X3", "X5" ] },

//                 { "name" : "Fiat", "models" : [ "500", "Panda" ] }

//   ] }
//   console.log(myObj.name+' has '+myObj.cars[1].name+'-'+myObj.cars[1].models[1]+' at the age of '+myObj.age)

// ------------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// Task-5

// arr=[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

// obj={}

// for(i=0;i<arr.length;i++){
//     var newArr=arr[i]
//     obj[newArr[0]]=newArr[1]
// }
// console.log(obj)

// ----------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
// Task-6
// function func1(){
//     arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
//     obj = {}
//     obj[arr[0]] = arr[arr.length-1]
//     console.log(obj)
// }

// func1()
// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
// Task-7
// const person = 
// [
//     {name: "PQR", age: 38},
//     {name: "ABC", age: 35},
//     {name: "XYZ", age: 47}
// ]
// var name1 = null;
// var age = 0;
// for (i in person){
//     if (person[i].age>age){
//         age = person[i].age
//         name1 = person[i].name
//     }
// }
// console.log(name1,age)

// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
// Task-10

// const a = {

//     "A" : "LJU",
//     "B" : ["CSE", "IT" , "CE"],
//     "C" : 
//     [
//         {
//         "D" : "Hi",
//         "E" : ['are', 4, {'F' : ['semester', 'We']} ]
//         }
//     ],
//     "G" : {
//     "H" : "students",
//     "I" : ["of","!"]
//     },
//     "J" : [{"K" :"Python", "L":"branch"},"FSD-2"]
// }

// console.log(a.C[0].D + a.G.I[1] +' ' + a.C[0].E[2].F[1] + ' ' + a.C[0].E[0] + ' ' + a.G.H + ' ' + a.G.I[0] + ' ' + a.C[0].E[2].F[0] + ' ' + a.C[0].E[1] + ' ' + a.G.I[0] + ' ' + a.B[0] + ' ' + a.J[0].L)

// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
// Task-11

// const a = {
//     "Name" : "Ramesh",
//     "Subects" : ["Maths", "Scence" , "chemistry"],
//     "Grade" : {"Type" : "marks","Total" : [88,90,99,87]},
//     "Range" : {"opt" : "100", "type" : ["secure","subject","class"]},
//     "achive" : [{"Rank" :"rank", "place":[1,2,3]}, {"Ordinalindicator":"st"},"12"],
//     "joints" : ['outof','got','and']
//   }

// console.log(a.Name + ' ' + a.joints[1] + ' ' + a.Grade.Total[2] + ' ' + a.joints[0] + ' ' + a.Range.opt + ' ' + a.Grade.Type + ' ' + a.joints[2] + ' ' + a.Range.type[0] + ' ' + a.achive[0].place[0] + a.achive[1].Ordinalindicator + ' ' + a.achive[0].Rank)
// ------------------------------------------------------------------------------------
