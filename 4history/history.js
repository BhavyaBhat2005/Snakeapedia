document.addEventListener("DOMContentLoaded", () => {
    // Image overlay toggle
    document.querySelectorAll(".image-container").forEach(container => {
      container.addEventListener("click", () => {
        const overlay = container.querySelector(".overlay");
        overlay.style.opacity = overlay.style.opacity === "1" ? "0" : "1";
      });
    });
  
    // Timeline: Initial reveal on load
    const timelineEvents = document.querySelectorAll(".timeline-event");
    timelineEvents.forEach(event => {
      event.style.display = "block";
      event.style.opacity = "1";
      event.style.transform = "translateY(0)";
    });
  
    // Move to top button
    const moveToTopButton = document.getElementById("move-to-top");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        moveToTopButton.classList.add("show");
      } else {
        moveToTopButton.classList.remove("show");
      }
    });
    moveToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // Scroll to FAQ
    window.Questions = function () {
      const faq = document.getElementById("faq1");
      if (faq) {
        faq.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    // Simulate hover on tap (mobile)
    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("touchstart", () => {
        document.querySelectorAll("nav a").forEach(l => l.classList.remove("mobile-hover"));
        link.classList.add("mobile-hover");
      });
    });
  
    // Mobile menu toggle
    document.getElementById("menu-toggle").addEventListener("click", () => {
      document.querySelector("nav").classList.toggle("active");
    });
  
    // Dropdown toggles
    document.querySelectorAll(".dropdown > a").forEach(item => {
      item.addEventListener("click", (e) => {
        if (window.innerWidth <= 992) {
          e.preventDefault();
          item.parentElement.classList.toggle("open");
        }
      });
    });
  
    document.querySelectorAll(".sub-dropdown > a").forEach(item => {
      item.addEventListener("click", (e) => {
        if (window.innerWidth <= 992) {
          e.preventDefault();
          item.parentElement.classList.toggle("open");
        }
      });
    });
  });
  
  // Timeline scroll reveal (keep outside DOMContentLoaded to listen immediately)
  function revealTimeline() {
    const timelineEvents = document.querySelectorAll(".timeline-event");
    timelineEvents.forEach((event) => {
      const position = event.getBoundingClientRect().top;
      if (position < window.innerHeight * 0.85) {
        event.classList.add("show");
      }
    });
  }
  window.addEventListener("scroll", revealTimeline);
  revealTimeline(); // Trigger once on load
  