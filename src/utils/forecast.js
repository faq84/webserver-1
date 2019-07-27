const request = require('request')


const forecast =(lat, long, callback)=>{
    const coordinate =(long +","+ lat )
    //console.log(coordinate)
    const url = 'https://api.darksky.net/forecast/a4449d8bf511bf1968f110c2eb9526da/'+coordinate+'?exclude=minutely,hourly,alerts,flags&units=si'
    request({url, json: true },(error,{body})=>{
        if (error){
            callback('Unable to connect to Weather API!',undefined)
        }else if(body.code===400){
        callback('Longitude and latitude incorrect! ',undefined)
        }else{
        callback(undefined,body.daily.data[0].summary+'. It is currently '+body.currently.temperature+'°C out. There is '+body.currently.precipProbability+'% chance of rain. The Highest Temprature supposed to reach is '+ body.daily.data[0].temperatureHigh+' & the lowest for the day is ' +body.daily.data[0].temperatureLow+'.')
    }
    
    })


}

module.exports = forecast