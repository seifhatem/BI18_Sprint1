const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("products", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  })
  var myobj = [
    { id: '001', name: 'John', price: '20', createdAt: '15/2/2018', updatedAt: '16/2/2018', sellerName: 'Farah Ahmed'},
    { id: '002', name: 'Peter', price: '30', createdAt: '15/2/2018', updatedAt: '16/2/2018', sellerName: 'Farah Ahmed'},
    { id: '003', name: 'Amy', price: '40', createdAt: '15/2/2018', updatedAt: '16/2/2018', sellerName: 'Farah Ahmed'},
    { id: '004', name: 'Hannah', price: '50', createdAt: '15/2/2018', updatedAt: '16/2/2018', sellerName: 'Farah Ahmed'},
    { id: '005', name: 'Michael', price: '60', createdAt: '15/2/2018', updatedAt: '16/2/2018', sellerName: 'Farah Ahmed'},
    { id: '006', name: 'Sandy', price: '70', createdAt: '15/2/2018', updatedAt: '16/2/2018', sellerName: 'Farah Ahmed'},
    { id: '007', name: 'Betty', price: '80', createdAt: '15/2/2018', updatedAt: '16/2/2018', sellerName: 'Farah Ahmed'},
    { id: '008', name: 'Richard', price: '90', createdAt: '15/2/2018', updatedAt: '16/2/2018', sellerName: 'Farah Ahmed'},
    { id: '009', name: 'Susan', price: '100', createdAt: '15/2/2018', updatedAt: '16/2/2018', sellerName: 'Farah Ahmed'},
    { id: '010', name: 'Vicky', price: '110', createdAt: '15/2/2018', updatedAt: '16/2/2018', sellerName: 'Farah Ahmed'}
  ];
  dbo.collection("products").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});

const productSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  sellerName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  {
    collection: 'products'
  }
});

module.exports = mongoose.model('Product', productSchema);
