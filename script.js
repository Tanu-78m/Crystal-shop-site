// Scroll to Products Section
document.getElementById('scrollToProducts').addEventListener('click', function (event) {
    event.preventDefault();  // Prevent default anchor behavior
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'     // Smooth scrolling effect
    });
});

// Scroll to Footer Section
document.getElementById('scrollToFooter').addEventListener('click', function (event) {
    event.preventDefault();  // Prevent default anchor behavior
    document.getElementById('footer').scrollIntoView({
        behavior: 'smooth'     // Smooth scrolling effect
    });
});


// Array of background image paths for the main image
const bgImages = [
    'url("images/cryst1.avif")',    // First image
    'url("images/cryst2.avif")',   // Second image
    'url("images/cryst6.avif")',   // Third image
    'url("images/Без имени-1 2.png")', // Fourth image
    'url("images/cryst3.avif")', // Fifth image
    'url("images/cryst4.avif")' // Sixth image
];

// Array of thumbnail image elements (inside el1 div)
const thumbnails = document.querySelectorAll('#thumbnailContainer a img');

// Index to keep track of the current image
let currentIndex = 0;

// Reference to the rig-img div
const rigImgDiv = document.getElementById('imageContainer');

// Function to update the main background image and the active thumbnail
function updateSlider() {
    // Update the main image
    rigImgDiv.style.backgroundImage = bgImages[currentIndex];

    // Remove active class from all thumbnails
    thumbnails.forEach((thumb, index) => {
        thumb.classList.remove('active-thumbnail');
    });

    // Add active class to the current thumbnail
    thumbnails[currentIndex].classList.add('active-thumbnail');
}

// Event listener for the right arrow
document.getElementById('rightArrow').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    currentIndex = (currentIndex + 1) % bgImages.length; // Cycle forward
    updateSlider(); // Update both the main image and thumbnail
});

// Event listener for the left arrow
document.getElementById('leftArrow').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    currentIndex = (currentIndex - 1 + bgImages.length) % bgImages.length; // Cycle backward
    updateSlider(); // Update both the main image and thumbnail
});

// Initial setup to display the first image and highlight
updateSlider();



