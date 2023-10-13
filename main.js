const wordsTextarea = document.querySelector(".word-counter-container .words");
const CountBtn= document.querySelector(".word-counter-container .count-btn");
const wordCount = document.querySelector(".word-counter-container .word-count span");

 const countWords = () => {
    let words = wordsTextarea.value;
    let splitWords = words.split(" ");

    let numberOfWords = splitWords.length;

    wordCount.innerHTML = numberOfWords;
 };

CountBtn.addEventListener("click",countWords);