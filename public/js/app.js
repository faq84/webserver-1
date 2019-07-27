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
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')




weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch('/weather?city='+location, {'mode': 'no-cors'}).then((response)=>{
        response.json().then((data)=> {
            if(data.error){
                messageOne.textContent = data.error
            }else{
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecastdata
            //     console.log(data.location)
            //    console.log(data.forecastdata)
            }
            
            
        })
    })

    console.log(location)

})