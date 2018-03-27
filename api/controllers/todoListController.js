'use strict';

// const express        = require('express');
// const bodyParser     = require('body-parser');
// const app            = express();
const app = require("request");


// callback = (response) => {

//     response.on('data', function (chunk) {
//       str += chunk;
//     });
  
//     response.on('end', function () {
//       console.log(req.data);
//       console.log(str);
//       // your code here if you want to use the results !
//     });
//   }
// app.get("https://jira.ibaset.com/rest/api/2/filter/"+req.params.filterId,function(req, res){
//         console.log(res.body);
//         jsonRes = res;
//     //    jsonRes = JSON.parse(res);   
//     //    console.log(jsonRes);     
//     });

exports.find_filter = function(req, res) {
    var rp = require('request-promise');
    var options = {
      method: 'GET',
      uri: 'https://jira.ibaset.com/rest/api/2/filter/'+req.params.filterId,
      body: {
         
      },      
      json: true // Automatically stringifies the body to JSON
  }; 
    
        console.log("In find_filter");
    let jsonRes = {};
    console.log(req.params.filterId);
    rp(options)
    .then(function (parsedBody) {
       console.log(parsedBody);
       res = parsedBody;
       return res;
    })
    .catch(function (err) {
        // POST failed...
        console.log(err);
    });
    // app.get({
    //     "headers": { "content-type": "application/json" },
    //     "url": "https://jira.ibaset.com/rest/api/2/filter/12791"
    // },(error, response, body) => {
    //     if(error) {
    //         return console.dir(error);
    //     }
    //     console.dir(JSON.parse(body));
    // });
    
     
     
   
    
};

