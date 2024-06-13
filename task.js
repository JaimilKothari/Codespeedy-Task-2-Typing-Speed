let startTime;
let endTime;
let timer;

const inputText = document.getElementById('input-text');
const testText = document.getElementById('test-text').innerText;
const typingSpeed = document.getElementById('typing-speed');
const totalWords = document.getElementById('total-words');
const totalTime = document.getElementById('total-time');

inputText.addEventListener('input', startTypingTest);

function startTypingTest() {
    if (!startTime) {
        startTime = new Date();
        timer = setInterval(updateTime, 1000) 
    }

    const typedText = inputText.value;
    const wordCount = countWords(typedText);
    const currentTime = new Date();
    const timeElapsed = (currentTime - startTime) / 1000;

    if (typedText === testText) {
        clearInterval(timer);
        endTime = new Date();
        displayResults(wordCount, timeElapsed);
    }
}

function updateTime() {
    const currentTime = new Date();
    const timeElapsed = (currentTime - startTime) / 1000;
    totalTime.textContent = Math.round(timeElapsed);
}

function countWords(text) {
    return text.trim().split(/\s+/).length;
}

function displayResults(wordCount, timeElapsed) {
    typingSpeed.textContent = Math.round((wordCount / timeElapsed) * 60);
    totalWords.textContent = wordCount;
    totalTime.textContent = Math.round(timeElapsed);
}

inputText.addEventListener('blur',() => {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
});