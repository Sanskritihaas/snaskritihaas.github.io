let x = document.getElementById("list");
x.style.display = "none";
function Toggle() {
  let x = document.getElementById("list");
  if (x.style.display === "none") {
    x.style.display = "block";
    x.style.visibility = "visible";
  } else {
    x.style.display = "none";
  }
}
// Create an array of images
const images = ["eloracaves.jpeg", "jamamasjid.jpeg", "kalaripayatu.jpeg","tajmahal.jpeg","agrafort.jpeg"];

// Set the current image index
let currentImageIndex = 0;

// Get the slideshow container element
const slideshowContainer = document.getElementById("slideshow-container");

// Create a slideshow function
function slideshow() {
  // Set the current image
  slideshowContainer.style.backgroundImage = `url(${images[currentImageIndex]})`;

  // Increment the current image index
  currentImageIndex++;

  // If the current image index is greater than the last image in the array, reset it to the first image
  if (currentImageIndex === images.length) {
    currentImageIndex = 0;
  }

  // Schedule the next slideshow image to be displayed in 3 seconds
  setTimeout(slideshow, 5000);
}

// Start the slideshow
slideshow();

// Create a function to change the image to the previous image
function previousImage() {
  // Decrement the current image index
  currentImageIndex--;

  // If the current image index is less than zero, set it to the last image in the array
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }

  // Set the current image
  slideshowContainer.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

// Create a function to change the image to the next image
function nextImage() {
  // Increment the current image index
  currentImageIndex++;

  // If the current image index is greater than the last image in the array, reset it to the first image
  if (currentImageIndex === images.length) {
    currentImageIndex = 0;
  }

  // Set the current image
  slideshowContainer.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

// Add event listeners to the previous and next buttons
document.getElementById("previous-button").addEventListener("click", previousImage);
document.getElementById("next-button").addEventListener("click", nextImage);

