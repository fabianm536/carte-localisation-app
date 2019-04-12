var http = require('http');
var express = require('express');
var multer = require('multer');
var path = require('path');
var pg = require("pg");
var app = express();
var fs = require('fs');
const csv = require('csvtojson');

const port = process.env.PORT; //This is for get port from IIS


//static folder. All sub folders work with
app.use(express.static(__dirname + '/'));


//////////////////////////
/////postgres config//////
//////////////////////////
var config = {
    user: 'postgres',
    database: 'gtrtest',
    password: 'postgres',
    port: 5432,
    max: 10, // max number of connection can be open to database
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

var pool = new pg.Pool(config);

app.get('/pool', function (req, res) {
    pool.connect(function (err, client, done) {
        if (err) {
            console.log("not able to get connection " + err);
            res.status(400).send(err);
        }
        var fields = req.query['fields'];
        var values = req.query['values'];

        var query = "INSERT INTO etudes_sites_geoter_monde ( " + fields + " ) VALUES (" + values + "); update etudes_sites_geoter_monde set geom=st_SetSrid(st_MakePoint(long, lat), 4326);"
        client.query(query, function (err, result) {
            //call `done()` to release the client back to the pool
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.status(200).send(result.rows);
        });
    });
});

//////////////////////////
///////file upload////////
//////////////////////////

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({ storage: storage }).single('userFile');


app.post('/api/file', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Error uploading file.");
        }
        
        
        const csvFilePath = req.file.destination + '/' + req.file.filename;

        csv({
            delimiter: [",", "|", "$", ";", "\t"]
        })
        .fromFile(csvFilePath)
        .then(function (jsonObj) {
            res.end(JSON.stringify(jsonObj));
            
        });
    });
});

//////////////////////////
//////server config///////
//////////////////////////

app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});
