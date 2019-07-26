//const axios = require('axios')
console.log('client side javascript loaded!')

// const url ='http://localhost:8080/weather?city=karachi'
// get(url).then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log('erro')
//         }else{
//             console.log(data.location)
//             console.log(data.forecastdata)
//         }        
        
//     })  
// })
fetch('http://localhost:8080/weather?city=karachi', {'mode': 'no-cors'}).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log('erro')
        }else{
            console.log(data.location)
            console.log(data.forecastdata)
        }
        
        
    })
})