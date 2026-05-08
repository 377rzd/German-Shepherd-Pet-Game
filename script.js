// Checks if the game has been opened before, setting and saving game variables
if (localStorage.getItem("firstPlay") == false) {
  var hunger = localStorage.getItem("hunger");
  var dirty = localStorage.getItem("dirty");
  var bored = localStorage.getItem("bored");
  var tired = localStorage.getItem("tired");
  var isFemale = localStorage.getItem("isFemale");
} else {
  var hunger = 10;
  var dirty = 30;
  var bored = 5;
  var tired = 60;
  var isFemale = false;
  localStorage.setItem("hunger", 10);
  localStorage.setItem("dirty", 30);
  localStorage.setItem("bored", 5);
  localStorage.setItem("tired", 60);
  localStorage.setItem("isFemale", false);
  localStorage.setItem("firstPlay", false);
}
// main loop statement
setInterval(game(), 10000);

function game() {
  var random = math.random();
  console.log(random);
  if (random > 0.75 && hunger !< 0) {
    hunger--;
    localStorage.setItem("hunger", hunger);
    console.log("Hunger decreased");
  } else if (random > 0.5 && dirty !< 0) {
    dirty--;
    localStorage.setItem("dirty", dirty);
    console.log("Dirty decreased");
  } else if (random > 0.25 && bored !< 0) {
    bored--;
    localStorage.setItem("bored", bored);
    console.log("Bored decreased");
  } else if (tired !< 0) {
    tired--;
    localStorage.setItem("tired", tired);
    console.log("Tired decreased");
  } else {
    console.log("All stats too low to decrease!");
  }
}

