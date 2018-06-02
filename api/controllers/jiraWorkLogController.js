'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const rp = require('request-promise');
const router = express.Router();
exports.findWorkLogSince = async function (req, res) {
    console.log("Find Work Log since....");
    var options = {
        method: 'GET',
        uri: 'https://jira.site.com/rest/api/2/worklog/updated?since=' + req.params.workLogSince,
        body: {},
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


