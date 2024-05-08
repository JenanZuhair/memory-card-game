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
    document.body.classList.toggle("dark-mode"); 
});