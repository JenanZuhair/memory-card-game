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
    expectedCard.innerHTML = `<img src="/imag/hidden_card.png" alt="Hidden Card"><img src="${randomImage}" alt="Expected Card" class="hidden">`;
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
function startTimer() {
    let secondsLeft = 5;
    timerInterval = setInterval(() => {
        if (secondsLeft > 0) {
            timerDisplay.textContent = `Time left: ${secondsLeft} seconds`;
            secondsLeft--;
        } else {
            clearInterval(timerInterval);
            timerDisplay.textContent = "Time's up! You lost.";
        }
    }, 1000);
}