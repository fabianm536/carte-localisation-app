var http = require('http');
var express = require('express');
const cors = require('cors');
var multer = require('multer');
var path = require('path');
var pg = require("pg");
var app = express();
var fs = require('fs');
const csv = require('csvtojson');

const port = process.env.PORT; //This is for get port from IIS


//static folder. All sub folders work with
app.use(express.static(__dirname + '/public/'));

//CORS settings
const allowedOrigins = [
    'http://192.168.157.25',
    'http://192.168.157.25:90',
    'http://192.168.157.25:90/index.php/lizmap/service'
  ];

const corsOptions = {
origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
    callback(null, true);
    } else {
    callback(new Error('Origin not allowed by CORS'));
    }
}
}

// Enable preflight requests for all routes
app.options('*', cors(corsOptions));

app.get('/', cors(corsOptions), (req, res, next) => {
    res.json({ message: 'This route is CORS-enabled for an allowed origin.' });
})


//////////////////////////
/////postgres config//////
//////////////////////////
var config = {
	host: 'localhost',
    user: 'postgres',
    database: 'gtrtest',
    password: 'postgres',
    port: 5432,
    max: 10, // max number of connection can be open to database
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

/*
var config = {
	host: '192.168.157.17',
    user: 'postgres',
    database: 'geodocweb',
    password: 'geoter*2013',
    port: 5432,
    max: 10, // max number of connection can be open to database
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};
*/ 

var pool = new pg.Pool(config);

app.get('/pool', function (req, res) {
    pool.connect(function (err, client, done) {
        if (err) {
            console.log("not able to get connection " + err);
            res.status(400).send(err);
        }
        var fields = req.query['fields'];
        var values = req.query['values'];

        var query = "INSERT INTO etudes_sites_geoter_monde_2019 ( " + fields + " ) VALUES (" + values + "); update etudes_sites_geoter_monde_2019 set geom=st_SetSrid(st_MakePoint(long, lat), 4326);"
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

//get database points
app.get('/database', function (req, res) {
    pool.connect(function (err, client, done) {
        if (err) {
            console.log("not able to get connection " + err);
            res.status(400).send(err);
        }
        var extent = req.query['extent'];
        var limitval = req.query['limit'];
        var query = "SELECT toponyme, lat, long FROM public.etudes_sites_geoter_monde where" + extent + " limit "+ limitval
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
        callback(null, './public/shp');
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

////import shapefile
app.post('/api/shapefile', function (req, res) {
    
    upload(req, res, function (err) {
        if (err) {
            return res.end("Error uploading file.");
        }
        const shpPath = req.file.filename;
        return res.end(shpPath);

        
    })
});

//////////////////////////
//////server config///////
//////////////////////////

app.listen(4000, function () {
    console.log('CORS-enabled web server is running.. on Port 4000');
});
