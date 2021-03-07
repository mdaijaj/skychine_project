let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let user=require('./routes/user')

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs') 								

//routes
app.use('/', user.router)

app.listen(4000);
console.log("Server Listening on port 4000");
