$(document).ready(function(){
   $('.hamburger').on('click', function(){
      // toggle class overlay on the menu
      $('header').toggleClass('overlay');

      // toggle class show on the ul inside of the menu
      $('.contactNav').toggleClass('show');
      $('.topNavLogo').toggleClass('show');
      $('.indexNav').toggleClass('show');
   })
});