define(function (require) {

  var $ = require('jquery'),
    UserCollection = require('./UserCollection');

  function append(str){
    $('body').append("<p>" + str + '</p>');
  }

  append('jQuery works and can append paragraphs');

  var users = new UserCollection([
    {name:'Evan'},
    {name:'Karolis'},
    {name:'Garven'}
  ]);

  append("Backbone works and created a collection with " + users.length + " users:");

  users.each(function(user, ix){
    append('User ' + ix + ' is ' + user.get('name'));
  });

});