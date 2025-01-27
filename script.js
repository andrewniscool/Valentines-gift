// script.js

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif

            // Make the side divs visible
            document.getElementById('image-container-left').style.display = 'flex';
            document.getElementById('image-container-right').style.display = 'flex';
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ec7063', '#a569bd ', '#5dade2', '#7dcea0', '#d6eaf8', '#4617e7', 'ef96fc'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the main image container
    var imageContainer = document.getElementById('image-container');
    var imageContainer2 = document.getElementById('image-container-left');
    var imageContainer3 = document.getElementById('image-container-right');
    
    imageContainer.innerHTML = ''; // Clear the main container
    imageContainer2.innerHTML = ''; // Clear the left container
    imageContainer3.innerHTML = ''; // Clear the right container

    // Create new images for the main container
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';

    var tomHeartImage = new Image();
    tomHeartImage.src = 'tom.gif';
    tomHeartImage.alt = 'Tom Heart';

    // Create and append text elements
    var textElement = document.createElement('p');
    textElement.textContent = 'YAYYYY I LOVE YOU!!!!!!!!!!!!!!!!'; // Your custom text
    textElement.style.fontSize = '50px';
    textElement.style.color = 'purple';
    textElement.style.fontFamily = 'Mission Script';

    var textElement2 = document.createElement('p');
    textElement2.textContent = 'see you at kanak bby gurl............ OTASIIIIIIIIIIIIIII';
    textElement2.style.color = 'purple';

    // Append elements to the main container
    imageContainer.appendChild(catHeartImage);
    imageContainer.appendChild(textElement);
    imageContainer.appendChild(textElement2);
    imageContainer.appendChild(tomHeartImage);

    // Create new images for the left container
    var image2 = new Image();
    image2.src = 'Image2.gif';
    image2.alt = 'Image 2';

    var image3 = new Image();
    image3.src = 'Image3.gif';
    image3.alt = 'Image 3';

    // Create new images for the right container
    var image4 = new Image();
    image4.src = 'Image4.gif';
    image4.alt = 'Image 4';

    var image5 = new Image();
    image5.src = 'Image5.gif';
    image5.alt = 'Image 5';

    // Append images to their respective side containers
    imageContainer2.appendChild(image2);
    imageContainer2.appendChild(image3);

    imageContainer3.appendChild(image4);
    imageContainer3.appendChild(image5);

    // Hide the options container
    document.getElementById('options').style.display = 'none';
}

displayCat();