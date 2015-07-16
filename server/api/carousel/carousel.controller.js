'use strict';

var _ = require('lodash');
var Carousel = require('./carousel.model');

// Get list of carousels
exports.index = function(req, res) {
  Carousel.find(function (err, carousels) {
    if(err) { return handleError(res, err); }
    return res.json(200, carousels);
  });
};

// Get a single carousel
exports.show = function(req, res) {
  Carousel.findById(req.params.id, function (err, carousel) {
    if(err) { return handleError(res, err); }
    if(!carousel) { return res.send(404); }
    return res.json(carousel);
  });
};

// Creates a new carousel in the DB.
exports.create = function(req, res) {
  Carousel.create(req.body, function(err, carousel) {
    if(err) { return handleError(res, err); }
    return res.json(201, carousel);
  });
};

// Updates an existing carousel in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Carousel.findById(req.params.id, function (err, carousel) {
    if (err) { return handleError(res, err); }
    if(!carousel) { return res.send(404); }
    var updated = _.merge(carousel, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, carousel);
    });
  });
};

// Deletes a carousel from the DB.
exports.destroy = function(req, res) {
  Carousel.findById(req.params.id, function (err, carousel) {
    if(err) { return handleError(res, err); }
    if(!carousel) { return res.send(404); }
    carousel.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}