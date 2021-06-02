function toggleIcon() {
    var plus = document.getElementById("plusIcon");
    var minus = document.getElementById("minusIcon");
    if (minus.style.display === "none") {
        plus.style.display = "none";
        minus.style.display = "block";
    } else {
        plus.style.display = "block";
        minus.style.display = "none";
        
    }
  }