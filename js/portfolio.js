// JavaScript (at the end of your HTML file or in a separate .js file)
document.getElementById('backToTop').addEventListener('click', function() {
  scrollToTop(500); // Adjust the scrolling duration as needed
});

// Show the "Back to Top" button when the user scrolls down 20 pixels
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('backToTop').style.display = 'block';
  } else {
    document.getElementById('backToTop').style.display = 'none';
  }
};

// Smooth scroll to the top of the page
function scrollToTop(scrollDuration) {
  const scrollStep = -window.scrollY / (scrollDuration / 15);
  const scrollInterval = setInterval(function() {
    if (window.scrollY != 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}

//Copy email function

 