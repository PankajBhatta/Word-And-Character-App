
const textarea = document.querySelector(".textarea");
const characterCount = document.querySelector(".character-count span");

const countButton = document.querySelector(".count-btn");
countButton.addEventListener("click", function() {
    const text = textarea.value;
    const count = text.length;
    characterCount.textContent = count;
});
