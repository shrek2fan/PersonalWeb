// Global variable to keep track of the current slide index
var slideIndex = 0;

/**
 * Function to change the current slide
 * @param {number} step - The number to move in the slide array (can be negative or positive)
 */
function moveSlide(step) {
  // Retrieve all elements with class "slide"
  var slides = document.getElementsByClassName("slide");
  
  // Calculate the new slide index, wrapping around if necessary
  slideIndex = (slideIndex + step + slides.length) % slides.length;
  
  // Hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Show the new current slide
  slides[slideIndex].style.display = "block";
}

// Event listener for DOMContentLoaded event to ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
  // Add click event listener to the 'previous' button
  document.querySelector('.prev').addEventListener('click', function() {
    moveSlide(-1); // Move to the previous slide
  });

  // Add click event listener to the 'next' button
  document.querySelector('.next').addEventListener('click', function() {
    moveSlide(1); // Move to the next slide
  });
});


// Event listener for DOMContentLoaded event for theme toggle functionality
document.addEventListener('DOMContentLoaded', (event) => {
  // Get the theme toggle button
  const themeToggle = document.getElementById('themeToggle');
  
  // Retrieve the current theme from local storage
  const currentTheme = localStorage.getItem('theme');

  // If the current theme is 'dark', apply the dark class to the body
  if (currentTheme === 'dark') {
      document.body.classList.add('dark');
  }

  // Add click event listener to the theme toggle button
  themeToggle.addEventListener('click', () => {
      // Toggle the 'dark' class on the body
      document.body.classList.toggle('dark');
      
      // Determine the new theme and save it in local storage
      let theme = document.body.classList.contains('dark') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
  });
});
