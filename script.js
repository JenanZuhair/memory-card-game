
const startButton = document.getElementById("startButton");
const attemptCount = document.getElementById("attemptCount");
const expectedCard = document.getElementById("expected_card");
const resultMessage = document.getElementById("resultMessage");
const timerDisplay = document.getElementById("timer");

const images = [
   {path:"/imag/sun_flower.jpg",hint:"This is a flower known as the flower that never dies"},
    {path:"/imag/Hibiscus.jpg", hint:"It is used as a medicinal herb in many folk cultures"},
    {path:"/imag/Zinnia.jpg",hint:"One of the most common flowers in gardens"},
    {path:"/imag/Tulip.jpg",hint:"One of the most famous flowers in the world, expressing beauty, elegance and rare availability"},
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
    expectedCard.innerHTML = `
        <img src="${randomImage.path}" alt="Expected Card">
        <p>${randomImage.hint}</p>
    `;
};


function generateRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function checkGuess(clickedImage) {
    const clickedImageIndex = Array.from(clickedImage.parentNode.children).indexOf(clickedImage);
    if (clickedImageIndex === expectedImageIndex) {
        resultMessage.textContent = "Congratulations! You won!";
        expectedCard.innerHTML = `<img src="${clickedImage.src}" alt="Guessed Card">`; // استبدل الصورة المخفية بالصورة الصحيحة المختارة
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
