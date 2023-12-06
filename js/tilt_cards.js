//This does the tilting of the card
var cards = document.querySelectorAll(".tilt");

// Loop through each card
cards.forEach(function(card) {
  // Add a 'mousemove' event listener to the card
  card.addEventListener("mousemove", function(e) {
    // Calculate tilt amount (you can adjust the divisor to get the desired effect)
    var tiltX = (e.offsetY - card.offsetHeight / 2) / 8;
    var tiltY = -(e.offsetX - card.offsetWidth / 2) / 8;

    // Apply the tilt effect using CSS transform property
    card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  });

  // Add a 'mouseleave' event listener to the card
  card.addEventListener("mouseleave", function() {
    // Reset the card's position when the mouse leaves
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});


//this adds a gradient around the mouse while you move on the card
cards.forEach(function(card) {
    // Store the original background
    var originalBackground = getComputedStyle(card).background;
  
    // Add a 'mousemove' event listener to the card
    card.addEventListener("mousemove", function(e) {
      // Calculate the position of the mouse relative to the card
      var mouseX = e.offsetX;
      var mouseY = e.offsetY;
  
      // Create a radial gradient background with the center at the mouse's position
      var gradient = `radial-gradient(circle 150px at ${mouseX}px ${mouseY}px, green, transparent)`;
      card.style.background = `${gradient}, ${originalBackground}`;
    });
    card.addEventListener("mouseleave", function() {
      card.style.background = originalBackground;
    });
  });