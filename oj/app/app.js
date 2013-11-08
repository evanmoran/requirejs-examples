define(function (require) {

  var $ = require('jquery'),
    oj = require('oj');

  oj.use(require('oj-twitter-button'));

  $('body').ojAppend(function(){

    oj.p('Making twitter buttons with OJ:');

    ['KidkArolis', 'evanmoran'].forEach(function(name){
      oj.TwitterButton(name);
    })

  })

});