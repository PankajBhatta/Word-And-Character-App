// Get references to the textarea and the character count span
const textarea = document.querySelector(".textarea");
const characterCount = document.querySelector(".character-count span");

// Add a click event listener to the "Count characters" button
const countButton = document.querySelector(".count-btn");
countButton.addEventListener("click", function() {
    const text = textarea.value;
    const count = text.length;
    characterCount.textContent = count;
});
