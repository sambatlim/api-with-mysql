
var express = require('express');
var app = express();

var connection = require("../model/insert-data");
var bodyParser = require("body-parser");

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/insertdata',function(req,res){
    var assetId = req.body.assetid;
    var tagId = req.body.tagid;
    var sql = "INSERT INTO asset_unai (asset_id, tag_id) VALUES ("+assetId+", "+tagId+")";
    connection.query(sql,function(err,response){
        if(err){
            res.send(err);
        }else{
            res.sendStatus(200);
        }
    })
});

app.listen(port,()=>console.log(`app running in localhost: ${port}`));