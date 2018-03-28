'use strict';

 const express        = require('express');
 const bodyParser     = require('body-parser');
 const app            = express();
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());
const rp = require('request-promise');
const router = express.Router();
exports.find_filter = async function(req, res) {
    
    var options = {
        method: 'GET',
        uri: 'https://jira.ibaset.com/rest/api/2/filter/'+req.params.filterId,
        body: {},
        json: true // Automatically stringifies the body to JSON
    };
    const response = await rp(options)
        .then(function (parsedBody) {
            return parsedBody;
        })
        .catch(function (err) {
            console.log(err);
            return err;
        });
    res.status(200).json(response);    
};


exports.searchJira = async function(req, res) {
    console.log("From search jira");
    console.log(req.body.jql);
    // app.post("https://jira.ibaset.com/rest/api/2/search", function(req,res)
    // {   
    //     console.log("From call");
    // });
    // console.log(req.params);

    var options = {
        method: 'POST',
        uri: "https://jira.ibaset.com/rest/api/2/search",
        body: {
            "jql" : req.body.jql 
        },
        "content-type" : "application/json",
        json: true // Automatically stringifies the body to JSON
    };
    const response = await rp(options)
        .then(function (parsedBody) {
            return parsedBody;
        })
        .catch(function (err) {            
            return err;
        });
    res.status(200).json(response);  
    
};

