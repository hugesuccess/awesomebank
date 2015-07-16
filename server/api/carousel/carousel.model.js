'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CarouselSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Carousel', CarouselSchema);