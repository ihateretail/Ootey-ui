'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  sku: String,
  qty: Number,
  name: String,
  description:String,
  category:{},
  price: Number,
  vendor:String,
  vendorId:String,
  brandName:String,
  url:String,
  images:{},
  imagesAlt:{}

});

module.exports = mongoose.model('Product', ProductSchema);
