
const mongoose = require('mongoose');

var user = "shadd";
var password = "azerty123";
var port = 15131;
var bddname = "openweatherapp";


// useNewUrlParser ;)
var options = {
   connectTimeoutMS: 5000,
   useNewUrlParser: true,
  };

mongoose.connect('mongodb://'+user+':'+password+'@ds115131.mlab.com:'+port+'/'+bddname,
    options,
    function(err) {
     if (err) {
       console.log(err);
     } else {
       console.info('connexion ok');
     }
    }
);

module.exports = mongoose;
