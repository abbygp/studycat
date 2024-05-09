document.addEventListener("DOMContentLoaded", function() {
  function toggleMenu() {
    var settingsIcon = document.getElementById("settingsIcon");
    var timerIcon = document.getElementById("timerIcon");
    var menuButton = document.getElementById("menuButton").getElementsByTagName("img")[0];
  
    if (settingsIcon && settingsIcon.style.display === "none") {
      settingsIcon.style.display = "block";
      timerIcon.style.display = "block";
      menuButton.src = "/images/xmenu.png";
    } else {
      settingsIcon.style.display = "none";
      timerIcon.style.display = "none";
      menuButton.src = "/images/menu.png";
    }
  }

  document.getElementById("menuButton").addEventListener("click", toggleMenu);
});
