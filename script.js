if (localStorage.getItem("firstPlay") == false) {
  let hunger = localStorage.getItem("hunger");
  let dirty = localStorage.getItem("dirty");
  let bored = localStorage.getItem("bored");
  let tired = localStorage.getItem("tired");
  let isFemale = localStorage.getItem("isFemale");
} else {
  let hunger = 10;
  let dirty = false;
  let bored = false;
  let tired = false;
  let isFemale = false;
  localStorage.setItem("hunger", 10);
  localStorage.setItem("dirty", false);
  localStorage.setItem("bored", false);
  localStorage.setItem("tired", false);
  localStorage.setItem("isFemale", false);
  localStorage.setItem("firstPlay", false);
}
