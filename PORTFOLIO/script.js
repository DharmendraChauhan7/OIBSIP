const humberger = document.getElementById("humbergerbtn");
const menu = document.getElementById("mob-links");
let lists = document.querySelectorAll(".icon");

humberger.addEventListener("click", function() {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

lists.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});
