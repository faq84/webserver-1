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
            //console.log(body.daily.data[0].temperatureHighTime*1000)
            const thTdate = new Date(body.daily.data[0].temperatureHighTime*1000)
            const thThour = thTdate.getHours()
            const thTminutes = "0" + thTdate.getMinutes();
            // Seconds part from the timestamp
            const thTseconds = "0" + thTdate.getSeconds();
            const temphighTime = thThour + ':' + thTminutes.substr(-2) + ':' + thTseconds.substr(-2);
            //console.log(temphighTime + "")
            //console.log(body.daily.data[0].temperatureLowTime*1000)
            const tlTdate = new Date(body.daily.data[0].temperatureLowTime*1000)
            const tlThour = tlTdate.getHours()
            const tlTminutes = "0" + tlTdate.getMinutes();
            // Seconds part from the timestamp
            const tlTseconds = "0" + tlTdate.getSeconds();
            const templowTime = tlThour + ':' + tlTminutes.substr(-2) + ':' + tlTseconds.substr(-2);
            //console.log(templowTime + "")
        callback(undefined,body.daily.data[0].summary+'. It is currently '+body.currently.temperature+'°C out. There is '+body.currently.precipProbability+'% chance of rain. The Highest Temprature supposed to reach is '+ body.daily.data[0].temperatureHigh+'°C @ '+ temphighTime+' Hrs & the lowest for the day is ' +body.daily.data[0].temperatureLow+'°C @ '+templowTime+' Hrs.')
    }
    
    })


}

module.exports = forecast