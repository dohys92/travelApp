var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
app.use(express.static('dist'))
console.log(__dirname)
const cors = require('cors');
app.use(cors());

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

let appData = {};
app.get('/all', getData);
function getData(req,res) {
	res.send(appData);
	console.log(appData);
};

app.post('/addImage', addEntry)
function addEntry(req, res){
	console.log("addEntry function working... req.body BELOW")
	let newData = req.body;
	let newEntry = {
			latitude: newData.latitude,
			longitutde: newData.longitutde,
			country: newData.country
		   }
	appData.push(newEntry);
	// res.send(data);
	// console.log(data);
};


// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
});

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })

module.exports = app;