$(document).ready(function(){
  $('.menu-list').on().click(function(event){
    (event).preventDefault();
    $('body').toggleClass('menu-show');
  });
  $('.heart').click(function(event){
    $(this).toggleClass('full');
  });
  $('.burger-menu h5').click(function(event){
    $(this).toggleClass('add');
  });
});