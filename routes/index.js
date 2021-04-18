var express = require('express');
var router = express.Router();
var mongodb = require("mongodb")
var {url,mongodClient} = require("../config")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// enquiry API
router.post('/enquiry', async function(req, res, next) {
  let client;
  try{
      client = await mongodClient.connect(url)
      let db = client.db("acquainfra")
      let clientname = req.body.clientname
      let email = req.body.email
      let whatsapp = req.body.whatsapp
      let mobile = req.body.mobile
      let address = req.body.address
      let projectname = req.body.projectname
      let projecttype = req.body.projecttype
      let floatingsize = req.body.floatingsize
      let application = req.body.application
      let maxload = req.body.maxload
      let watertype = req.body.watertype
      let waterdepth = req.body.waterdepth
      let maxwaterwaveheight = req.body.maxwaterwaveheight
      let bedtype = req.body.bedtype
      let location = req.body.location
      let time = req.body.time
      let accesories = req.body.accesories
      let other = req.body.other
      let comment = req.body.comment
      console.log(req.body)
      let result = await db.collection("enquiry").insertOne({
          clientname,email,whatsapp,mobile,address,projectname,projecttype,floatingsize,application,maxload,watertype,waterdepth,maxwaterwaveheight,bedtype,location,time,accesories,other,comment
      })
      res.json({
          message:"Success"
      })
  }catch(error){
      client.close()
      console.log(error)
  }
});

// enquiry API
router.post('/contact', async function(req, res, next) {
  let client;
  try{
      client = await mongodClient.connect(url)
      let db = client.db("acquainfra")
      let name = req.body.name
      let email = req.body.email
      let contact = req.body.contact
      let description = req.body.description
      
      let result = await db.collection("contact").insertOne({
          name,email,contact,description
      })
      res.json({
          message:"Success"
      })
  }catch(error){
      client.close()
      console.log(error)
  }
});

module.exports = router;
