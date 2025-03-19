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

arr=[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

obj={}

for(i=0;i<arr.length;i++){
    var newArr=arr[i]
    obj[newArr[0]]=newArr[1]
}
console.log(obj)
