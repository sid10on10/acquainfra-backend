var mongodb = require('mongodb')
var mongodClient = mongodb.MongoClient;
//var url = "mongodb+srv://sid10on10:qwerty123@cluster0.fqer8.mongodb.net/shortener?retryWrites=true&w=majority";
var url = "mongodb://sid:sid@127.0.0.1:27017"

module.exports = {url,mongodClient}