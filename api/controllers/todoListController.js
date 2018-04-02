'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const rp = require('request-promise');
const router = express.Router();
exports.find_filter = async function (req, res) {
    console.log("Jira Filter called....");
    var options = {
        method: 'GET',
        uri: 'https://jira.domain.com/rest/api/2/filter/' + req.params.filterId,
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

exports.userLogin = async function (req, res) {
    console.log("User Login called....");
    var options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        url: 'https://jira.domain.com/rest/auth/latest/session',
        body: {
            "username": req.body.username,
            "password": req.body.password
        },
        json: true
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
exports.searchJira = async function (req, res) {
    console.log("From search jira");

    var options = {
        method: 'POST',
        uri: "https://jira.domain.com/rest/api/2/search",
        headers: {
            'Content-Type': 'application/json',
            cookie: req.body.name + '=' + req.body.value
        },
        body:
            {
                "jql": req.body.searchJql,
                "maxResults": 20
            },
        json: true // Automatically stringifies the body to JSON
    };
    const response = await rp(options)
        .then(function (parsedBody) {
            return parsedBody;
        })
        .catch(function (err) {
            //console.log(err);
            return err;
        });
    res.status(200).json(response);
};

