//nav bar
let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});
// dark mode
let darkicon = document.getElementById("dark-btn");
let darks = document.getElementById("icons");
 
darkicon.onclick = function(){
  document.body.classList.toggle("dark-mode")
  if(darks.className == "fa-solid fa-moon"){
    darks.className = "fa-solid fa-sun";
  }else{
    darks.className = "fa-solid fa-moon";
  }
}