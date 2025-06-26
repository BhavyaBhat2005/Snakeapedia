document.addEventListener("DOMContentLoaded", function () {
  function fadeSlider(sliderId) {
    const images = document.querySelectorAll(`#${sliderId} img`);
    let index = 0;

    function changeImage() {
      images.forEach(img => img.classList.remove("active"));
      images[index].classList.add("active");
      index = (index + 1) % images.length;
    }

    if (images.length) {
      images[0].classList.add("active");
      setInterval(changeImage, 1500);
    }
  }

  fadeSlider("cobra-slider");
  fadeSlider("viper-slider");
  fadeSlider("krait-slider");
});

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
