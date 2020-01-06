const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000;

const uri = "mongodb+srv://admin:admin@fainacluster-bu653.mongodb.net/labdb?retryWrites=true";
mongoose.connect(uri,{ useNewUrlParser: true , useUnifiedTopology: true })
.then(result => {console.log(PORT)})
.catch(err => {console.log(err)});

const db = mongoose.connection

module.exports = db