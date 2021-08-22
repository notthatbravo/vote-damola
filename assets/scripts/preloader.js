$(document).ready(function(){
});
$("nav div a.a").on("click" , function(e){
e.preventDefault();
$("body , html").animate({
scrollTop: $(this.hash).offset().top
} , 1000);
});
// Preloader
$(window).on('load', function() {
  if ($('#preloader').length) {
    $('#preloader').delay(10000).fadeOut('slow', function() {
      $(this).remove();
    });
  }
});

// disable preloader manually
disablePreloaderBtn = document.querySelector('#disable-preloader-btn');
preloader = document.querySelector('#preloader');

disablePreloaderBtn.addEventListener('click', function() {
    preloader.classList.toggle('hidden');
})
