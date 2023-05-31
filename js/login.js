$(document).ready(function(){
    $('.menu-list').on().click(function(event){
      (event).preventDefault();
      $('body').toggleClass('menu-show');
    });
  });