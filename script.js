const startButton = document.getElementById("startButton");
const attemptCount = document.getElementById("attemptCount");
const expectedCard = document.getElementById("expected_card");
const resultMessage = document.getElementById("resultMessage");
const timerDisplay = document.getElementById("timer");

// تحقق من وضع الدارك مود وتطبيقه
const darkmode = localStorage.getItem("darkmode");
if (darkmode === "true") {
    document.body.classList.add("dark-mode");
} else {
    document.body.classList.remove("dark-mode");
}

// مصفوفة الصور والتلميحات
const images = [
    { path: "/imag/sun_flower.jpg", hint: "This is a flower known as the flower that never dies" },
    { path: "/imag/Hibiscus.jpg", hint: "It is used as a medicinal herb in many folk cultures" },
    { path: "/imag/Zinnia.jpg", hint: "One of the most common flowers in gardens" },
    { path: "/imag/Tulip.jpg", hint: "One of the most famous flowers in the world, expressing beauty, elegance and rare availability" },
];

let attempts = 0;
let expectedImageIndex;
let timerInterval;

// دالة البدء
// دالة البدء
startButton.onclick = function () {
    if (attempts >= 3) {
        attempts = 0; // إعادة تعيين عدد المحاولات إلى الصفر
        attemptCount.textContent = "Attempt: " + attempts;
        resultMessage.textContent = "You have reached the maximum attempts."; // طباعة رسالة الوصول للحد الأعلى
        return; // الخروج من الدالة لعدم تنفيذ باقي الشيفرة
    }

    attempts++;
    attemptCount.textContent = "Attempt: " + attempts;
    resultMessage.textContent = "";
    startTimer();

    expectedImageIndex = generateRandomIndex(images.length);
    const randomImage = images[expectedImageIndex];
    expectedCard.innerHTML = `
        <img id="image-won" style="display:none" src="${randomImage.path}" alt="Expected Card">
        <p>${randomImage.hint}</p>
    `;
};

// دالة لإنشاء رقم عشوائي
function generateRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

// دالة التحقق من الاختيار
// دالة التحقق من الاختيار
function checkGuess(clickedImage) {
    const clickedImageIndex = Array.from(clickedImage.parentNode.children).indexOf(clickedImage);
    if (clickedImageIndex === expectedImageIndex) {
        resultMessage.textContent = "Congratulations! You won!";
        // اخفاء الصورة المخفية
        document.getElementById("image-won").style.display = "block";
        // عرض الصورة المختارة
        clickedImage.style.display = "block";
    } else {
        resultMessage.textContent = "Oops! You lost. Try again!";
    }

    clearInterval(timerInterval);
    timerDisplay.textContent = "";
    if (clickedImageIndex === expectedImageIndex) {
        handleWin(); // إذا كان اللاعب فاز، قم
    
}
}

// دالة بدء المؤقت
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
function handleWin() {
    resultMessage.textContent = "Congratulations! You won!";
    // ابدأ تغيير لون الخلفية كل دقيقة
    const colorChangeInterval = changeBackgroundColor();
    // بعد مرور دقيقة، قم بإيقاف تغيير اللون
    setTimeout(() => {
        stopColorChange(colorChangeInterval);
    }, 60000); // 60 ثانية أي ما يعادل دقيقة واحدة
}

// دالة لتغيير لون الخلفية بشكل دوري
function changeBackgroundColor() {
    const colors = ["red", "blue", "green", "yellow", "orange", "purple"]; // قائمة الألوان التي ترغب في تغيير الخلفية إليها
    let index = 0; // متغير لتتبع مؤشر اللون الحالي في القائمة
    return setInterval(() => {
        document.body.style.backgroundColor = colors[index]; // تغيير لون الخلفية إلى اللون الحالي في القائمة
        index = (index + 1) % colors.length; // زيادة مؤشر اللون بشكل دوري
    }, 1000); // كل ثانية واحدة (يمكن تعديل هذه القيمة حسب الرغبة لزيادة أو تقليل سرعة التغيير)
}

// دالة لإيقاف تغيير لون الخلفية
function stopColorChange(intervalId) {
    clearInterval(intervalId); // إيقاف تنفيذ دالة تغيير اللون بواسطة رقم المعرف الذي تم إرجاعه من setInterval
}
