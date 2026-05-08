// Checks if the game has been opened before, setting and saving game variables
if (localStorage.getItem("firstPlay") == false) {
  var hunger = localStorage.getItem("hunger");
  var dirty = localStorage.getItem("dirty");
  var bored = localStorage.getItem("bored");
  var tired = localStorage.getItem("tired");
  var isFemale = localStorage.getItem("isFemale");
} else {
  var hunger = 10;
  var dirty = false;
  var bored = false;
  var tired = false;
  var isFemale = false;
  localStorage.setItem("hunger", 10);
  localStorage.setItem("dirty", false);
  localStorage.setItem("bored", false);
  localStorage.setItem("tired", false);
  localStorage.setItem("isFemale", false);
  localStorage.setItem("firstPlay", false);
}
/* main loop statement
while (true) {
  localStorage.setItem("lastPlayed", Temporal.Now.plainDateTimeISO());
}
*/
