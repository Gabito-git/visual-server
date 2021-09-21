const express = require('express');
const fs = require('fs');
const https = require('https');
const http = require('http');

const httpPort = 80;
const httpsPort = 443;

const httpOptions = {
    cert: fs.readFileSync('./ssl/certificate.crt'),
    ca: fs.readFileSync('./ssl/ca_bundle.crt'),
    key: fs.readFileSync('./ssl/private.key')
}

const app = express();
const httpServer = http.createServer(app)
const httpsServer = https.createServer(httpOptions, app); 

app.use((req, res, next) => {
    if(req.protocol === 'http'){
       return res.redirect(301, `https://${req.headers.host}${req.url}`)
    }
    next();
})

app.use(express.static('public'));

httpServer.listen(httpPort),
httpsServer.listen(httpsPort)