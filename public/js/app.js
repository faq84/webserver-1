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


const weatherForm= document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    const location = search.value


    fetch('http://localhost:8080/weather?city='+location, {'mode': 'no-cors'}).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                console.log('erro')
            }else{
                console.log(data.location)
               console.log(data.forecastdata)
            }
            
            
        })
    })

    console.log(location)

})