// Toggle menu in mobile
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("active");
});

// Dropdown toggle in mobile
document.querySelectorAll(".dropdown > a").forEach((item) => {
  item.addEventListener("click", (e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      item.parentElement.classList.toggle("open");
    }
  });
});

document.querySelectorAll(".sub-dropdown > a").forEach((item) => {
  item.addEventListener("click", (e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      item.parentElement.classList.toggle("open");
    }
  });
});

// Scroll to FAQ
function Questions() {
  const faq = document.getElementById("faq1");
  if (faq) {
    faq.scrollIntoView({ behavior: "smooth" });
  }
}

// Simulate hover effect on tap (mobile)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('touchstart', function () {
    // Remove yellow from all
    document.querySelectorAll('nav a').forEach(l => l.classList.remove('mobile-hover'));
    // Add yellow to tapped link
    this.classList.add('mobile-hover');
  });
});

 // move to top 
document.addEventListener("DOMContentLoaded", () => {
  const moveToTopButton = document.getElementById("move-to-top");

  // Show/hide the button when user scrolls
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      moveToTopButton.classList.add("show");
    } else {
      moveToTopButton.classList.remove("show");
    }
  });

  // Scroll to top on button click
  moveToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
