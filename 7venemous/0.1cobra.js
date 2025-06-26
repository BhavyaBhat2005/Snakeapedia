// Select the button
const moveToTopButton = document.getElementById("move-to-top");

// Show the button when the user scrolls down
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    moveToTopButton.classList.add("show");
  } else {
    moveToTopButton.classList.remove("show");
  }
});

// Scroll to the top when the button is clicked
moveToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//FAQ button 
function Questions()
{
  document.getElementById("faq1").scrollIntoView({behavior: "smooth"});
}

function toggleMenu() {
  const navMenu = document.getElementById("nav-menu");
  console.log(navMenu);
  navMenu.classList.toggle("active");
}

function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("active");
}

// Enable dropdown toggle on mobile
document.querySelectorAll(".dropdown > a").forEach((dropdown) => {
  dropdown.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentElement.classList.toggle("open");
  });
});