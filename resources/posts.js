var Post = require('../models/post.js')
  , qs = require('querystring')
  , jwt = require('jwt-simple')
  , request = require('request')
  , config = require('../config.js')
  , moment = require('moment')
  , auth = require('./auth')

module.exports = function(app) {
//create new post
	  app.post('/api/posts', auth.ensureAuthenticated, function(req, res) {
	  	// LOOK UP THE CURRENT USER
	  	User.findById({_id: userId}, function (err, user) {
	  
	  	// MAKE NEW POST WITH REQ.BODY
	  	var newPost = new Post(req.body);
	  	// PUSH POST INTO USER.POSTS
	  	// SAVE BOTH
	  		post.save(function (err, post) {
	  			user.posts.unshift(post._id);
	  			user.save();
	  			res.send(post);
	  		});
	  	});	
	  });		
};