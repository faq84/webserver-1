const path = require('path')
const express = require('express')
// const axios = require('axios')
const hbs = require('hbs')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

// console.log(__dirname)
// console.log(__filename)
// console.log(path.join(__dirname,'../public'))

const app=express()
const port = process.env.PORT || 8080
//Define Path for Express config
const publicDirectPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials/')
//console.log(partialsPath)

//Setup handlebars engine and views location
app.use(express.static(publicDirectPath))
app.set('view engine','hbs')
app.set('views',viewsPath)
app.set('partials')
hbs.registerPartials(partialsPath)



//app.com
//app.com/help
//app.com/about
//app.com/weather
app.get('',(req,res)=>{
    //res.send('<h1>Hello Faizan this is your first JSON Proejct in Detail</h1>')
    res.render('index',{
        name:'Faizan Aqeel',
        location:'Index'
    })
})

app.get('/help',(req, res)=>{
    // res.send({
    //     Name: 'Faizan',
    //     Age: 35,
    //     Gender: 'Male'
    // })
    // res.send([{
    //     name:'Faizan'
    // },{
    //     name:'Soubia'
    // }])
    res.render('help',{
        //message:'This is the Help page with dynamic message.',
        name: 'Faizan Aqeel',
        location:'Help'
    })
})

app.get('/about', (req,res)=>{
    //res.send('<h1>You are on About us page.</h1>')
    res.render('about',{
        name:"Faizan Aqeel",
        location:"About"
    })
})

// app.get('/weather',(req,res)=>{
//     res.send({
//         forecast:'Its very humid and very hot in',
//         name: 'Faizan Aqeel',
//         location:'Weather'
//     })
// })

app.get('/help/*',(req, res)=>{
    res.render('notfound',{
        error:"Help document not found",
        name:'Faizan Aqeel',
        location:'Help document not found!'
    })

})
app.get('/products',(req, res)=>{
    if(!req.query.search){
        return res.send({
            error:'Valid Search parameter missing'
        })
    }
    
    console.log(req.query.search)
    res.send({
        products:[]
    })
})

app.get('/weather',(req,res)=>{
    if (!req.query.city){
        return res.send({
            error:'Please provide a city query paramter'
        })
    }
    geocode(req.query.city,(error,{lat,long,location}={})=>{
        if (error){
            return res.send({error})
        }
        forecast(long,lat,(error, forecastdata)=>{
            res.send({
                location,
                forecastdata
            })
        })
    })

})
app.get('*',(req, res)=>{
res.render('notfound',{
        error:"404 page not found",
        name:'Faizan Aqeel',
        location:'404 page not found page'
})
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  }); 


app.listen(port,()=>{
    console.log('Server is up on Port '+port)
})