const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const Land = require('./schemas/location_schema'); // Assuming you have defined the Land schema in a separate file
const data = require('./land.json'); 
const { reset } = require('nodemon');
mongoose.Promise = global.Promise;




// data.result.forEach(element => {
    

//     Land.create({name:element.Name,landId:element['Land Id'],landUseType:element['Land use Type'],locality:element.Locality,allottee:element['Alottee as per 7/12'],location:{type:"Point",coordinates:[element.Latitude,element.Londitude]}})
//     console.log(element)
// });
app.post('/getcordinates', function (req, res) {


    Land.find({
        location: {
          $near: {
            $geometry: {
              type: 'Point',
             // coordinates: [longitude, latitude] // Provide the longitude and latitude values here
              coordinates: [req.body.longitude, req.body.latitude] // Provide the longitude and latitude values here
            },
            $maxDistance: 3000 // Specify the maximum distance in meters (3 km = 3000 meters)
          }
        }
      }).then((result)=>{
        console.log(result)
        res.send(result)
      
      });


})

 /// console.log(query)



// Connect MongoDB at default port 27017.
mongoose.connect('mongodb+srv://vijay:htBfYOAXvKlvbcSQ@cluster0.u12k0eo.mongodb.net/sampurna?retryWrites=true&w=majority', {
    useNewUrlParser: true,
   
}, ).then((result)=>{


            console.log('MongoDB Connection Succeeded.')
    app.get('/', (req, res) => res.send('Hello World!'))
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
})

