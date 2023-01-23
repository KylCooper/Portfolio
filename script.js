
const element = document.querySelector(".text-to-animate");

// Split the text into an array of letters
const textArray = element.innerText.split('');

// Set a counter to keep track of which letter should be shown
let count = 0;

// Clear the inner text of the element
element.innerText = "";

// Function to show the next letter
function showNextLetter() {
    // Add the next letter to the inner text of the element
    element.innerText += textArray[count];
    // Increment the counter
    count++;
    // Check if there are more letters to show
    if (count < textArray.length) {
        // If there are, set a timeout to show the next letter
        setTimeout(showNextLetter, 40);
    } else {
        // If there are no more letters, set a timeout to hide the last letter
        setTimeout(hideLastLetter, 2000);
    }
}

// Function to hide the last letter
function hideLastLetter() {
    // Remove the last letter from the inner text of the element
    element.innerText = element.innerText.slice(0, -1);
    // Decrement the counter
    count--;
    // Check if there are more letters to hide
    if (count > 0) {
        // If there are, set a timeout to hide the next letter
        setTimeout(hideLastLetter, 40);
    } else {
        // If all letters have been hidden, reset the counter and show the text again
        count = 0;
        setTimeout(showNextLetter, 2000);
    }
}

// Start the animation
showNextLetter();

// -----------------------------------------



