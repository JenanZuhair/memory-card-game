// let darkmode = false;

function save_userName() {
    var username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location.href = "guess_card.html"; 
}
document.getElementById("color").addEventListener("click", function() {
    
    var colorPicker = document.createElement("input");
    colorPicker.type = "color";
    colorPicker.addEventListener("change", function() {
        document.body.style.backgroundColor = colorPicker.value;
    });

    colorPicker.click();
});
document.getElementById("darkMode").addEventListener("click", function() {
    const oldDarkmode = localStorage.getItem("darkmode") // true, false, undefined
    
    if (oldDarkmode === "true") {
        localStorage.setItem("darkmode", false)
        document.body.classList.remove("dark-mode");
    }
    else 
    {
        localStorage.setItem("darkmode", true)
        document.body.classList.add("dark-mode");
    } 
})