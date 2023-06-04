var naoButton = document.getElementById("naoButton");

naoButton.addEventListener("mouseover", function() {
    var body = document.querySelector("body");
    var offsetX = Math.random() * (body.offsetWidth - naoButton.offsetWidth);
    var offsetY = Math.random() * (body.offsetHeight - naoButton.offsetHeight);
    naoButton.style.position = "absolute";
    naoButton.style.left = offsetX + "px";
    naoButton.style.top = offsetY + "px";
});


  // Cria um elemento <div> para cada coração
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
  }
  setInterval(createHeart, 300);
  