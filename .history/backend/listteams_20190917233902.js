const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const cookie = require('../cookies');
const dbconfig = require('../db_config.json');

router.use(express.json());
router.post('/listteams', async(req,res) => {
    if(cookie.readCookie("") == null) {
        // Redirect to login page
        res.status(400).json({message:"not logged in"})
        return;
    }

    try{
        MongoClient.connect(dbconfig.url, { useNewUrlParser: true, useUnifiedTopology: true}, function(err,client){
            
        })
    }
} );