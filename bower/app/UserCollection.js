define(function (require) {
  var Backbone = require('backbone'),
    UserModel = require('./UserModel'),
    UserCollection = Backbone.Collection.extend({model: UserModel});
  return UserCollection;
});
