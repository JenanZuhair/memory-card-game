const startButton = document.getElementById("startButton");
const attemptCount = document.getElementById("attemptCount");
const expectedCard = document.getElementById("expected_card");
const resultMessage = document.getElementById("resultMessage");
const timerDisplay = document.getElementById("timer");

const images = [
    "/imag/sun_flower.jpg",
    "/imag/Hibiscus.jpg",
    "/imag/Zinnia.jpg",
    "/imag/Tulip.jpg"
];

let attempts = 0;
let expectedImageIndex;
let timerInterval;

startButton.onclick = function() {
    attempts++;
    attemptCount.textContent = "Attempt: " + attempts;
    resultMessage.textContent = "";
    startTimer();

    expectedImageIndex = generateRandomIndex(images.length);
    const randomImage = images[expectedImageIndex];
    expectedCard.innerHTML = `<img src="${randomImage}" alt="Expected Card">`;
};

function generateRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function checkGuess(clickedImage) {
    const clickedImageIndex = Array.from(clickedImage.parentNode.children).indexOf(clickedImage);

    if (clickedImageIndex === expectedImageIndex) {
        resultMessage.textContent = "Congratulations! You won!";
    } else {
        resultMessage.textContent = "Oops! You lost. Try again!";
    }
    clearInterval(timerInterval); 
    timerDisplay.textContent = ""; 
}
