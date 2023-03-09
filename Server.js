const express = require('express')
const { dirname} = require('path')
const app = express() 
const port = 3005
const date = require('./middelware/Date')
app.get('/' , (req,res)=>{
res.send('you are doing a goog job, proud of you')
}) 
app.get('/getelement', (req,res)=>{
    res.send('you change the root')
}
)

//partie ou on a affichage de nos pages html 

app.get('/homepage', (req,res)=>{
    res.sendFile(__dirname + '/public/home.html')
}
)
app.get('/produit',date, (req,res)=>{
    res.sendFile(__dirname  + '/public/produit.html')
})
app.listen(3005,err=>{
    err?console.log(err):console.log('you are doing great to the port 3005') 

})