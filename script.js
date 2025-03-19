// JavaScript to handle the color picker functionality
document.getElementById("submitColor").onclick = function () {
    let userColor = document.getElementById("colorInput").value;
    document.getElementById("colorMessage").textContent = `Your favorite color is ${userColor}!`;
};
