let activeNode = null;

function toggleInfo(type, element) {
    const infoBox = document.getElementById("info-box");
    const infoText = document.getElementById("info-text");
    const infoImage = document.getElementById("info-image");
    const foodWebBox = document.querySelector(".food-web-box");

    const descriptions = {
        "snake": "Snakes control prey populations and maintain ecological balance.",
        "mouse": "Mice are food for snakes, helping regulate rodent populations.",
        "bird": "Birds prey on snakes and keep food chains balanced.",
        "mongoose": "Mongooses hunt snakes, preventing overpopulation.",
        "frog": "Frogs eat insects and serve as snake prey.",
        "insect": "Insects are key in food chains, supporting many predators.",
        "plant": "Plants are the base of the food chain, providing energy."
    };

    const images = {
        "snake": "../0images/1general/6main.jpg",
        "mouse": "../0images/1general/mice.jpg",
        "bird": "../0images/1general/bird.jpg",
        "mongoose": "../0images/1general/mongose.jpg",
        "frog": "../0images/1general/frog.jpg",
        "insect": "../0images/1general/insect.jpg",
        "plant": "../0images/1general/plant.jpg"
    };

    if (activeNode === type) {
        infoBox.classList.remove("show");
        infoImage.classList.remove("show");
        foodWebBox.classList.remove("shift-left");
        activeNode = null;
    } else {
        infoText.textContent = descriptions[type];
        infoImage.src = images[type];
        infoBox.classList.add("show");
        infoImage.classList.add("show");
        foodWebBox.classList.add("shift-left");
        activeNode = type;
    }

    element.classList.add("clicked");

    
}

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
  