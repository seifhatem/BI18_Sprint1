const express = require('express'),
  router = express.Router(),
  asyncMiddleware = require('express-async-handler'),
  productCtrl = require('../controllers/ProductController');
  authenticationCtrl = require('../controllers/AuthenticationController');

//-------------------------------Product Routes-----------------------------------
router.get('/product/getProducts', asyncMiddleware(productCtrl.getProducts));
router.get('/product/getProduct/:productId', asyncMiddleware(productCtrl.getProduct));
router.get('/product/getProductsBelowPrice/:price', asyncMiddleware(productCtrl.getProductsBelowPrice));
router.post('/product/createProduct', asyncMiddleware(productCtrl.createProduct));
router.patch('/product/updateProduct/:productId', asyncMiddleware(productCtrl.updateProduct));
router.delete('/product/deleteProduct/:productId', asyncMiddleware(productCtrl.deleteProduct));

module.exports = router;

var Product = require('../models/Product');
router.route('http://localhost:3000/api/product/createProduct').post(function (req, res) {
  var product = new Product(req.body);
      item.save()
    .then(product => {
    res.status(200).json({'product': 'Product added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});
