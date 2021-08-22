// Back to top button
button = document.getElementById("back-to-top");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.opacity = "1";
  } else {
    button.style.opacity = "0";
  }
}
