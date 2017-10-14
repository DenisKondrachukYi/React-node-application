const express = require('express');
const path = require('path');
const app = express();
import * as compression from 'compression';
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/build'));
// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', (req: any, res: any) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});


app.use(compression());


app.listen(process.env.PORT || 8080, );
