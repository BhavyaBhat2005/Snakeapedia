const modalContainer = document.createElement("div"); // Create modal dynamically
modalContainer.id = "modal-container";
document.body.appendChild(modalContainer);

const religionsData = {
    hinduism: {
        title: "Hinduism",
        content: "In Hinduism, snakes (Nagas) are revered as divine beings. Lord Shiva wears a serpent around his neck, symbolizing power, fearlessness, and eternity. The festival of Nag Panchami is dedicated to snake worship, where devotees offer milk to cobras. Ananta, the infinite cosmic serpent, supports Lord Vishnu in the cosmic ocean, signifying endless time.",
        images: ["../0images/1general/5religioushindu2 (2).jpg", "../0images/1general/5religioushindu3.jpg", "../0images/1general/5religioushindu4.jpg"]
    },
    buddhism: {
        title: "Buddhism",
        content: "In Buddhism, Nagas (serpent deities) are powerful beings that protect the Dharma. The most famous Naga legend is that of Mucalinda, the serpent king, who shielded Buddha from a storm during deep meditation. Nagas are often depicted in temple architecture and Buddhist mythology as symbols of protection and enlightenment.",
        images: ["../0images/1general/5religiousbuddhism2.jpg", "../0images/1general/5religiousbuddhism3.webp", "../0images/1general/5religiousbuddhism4.jpg"]
    },
    jainism: {
        title: "Jainism",
        content: "In Jainism, snakes are associated with Lord Parshvanatha, the 23rd Tirthankara, who was protected by a multi-hooded serpent during meditation. The story symbolizes divine protection and enlightenment. Snakes also appear in Jain cosmology, often linked to cycles of karma and rebirth.",
        images: ["../0images/1general/5religiousjainism2.jpg", "../0images/1general/5religiousjainism3.jpg", "../0images/1general/5religiousjainism4.jpg"]
    }
};

// Function to open modal
function openModal(religion) {
    const data = religionsData[religion];

    if (!data) return; // If data is not found, exit function

    modalContainer.innerHTML = `
        <div class="modal" id="modal">
            <div class="modal-content">
                <span class="close-btn" onclick="closeModal()">&times;</span>
                <h2>${data.title}</h2>
                <p>${data.content}</p>
                <div class="modal-images">
                    ${data.images.map(img => `<img src="${img}" alt="${data.title}" class="modal-image">`).join('')}
                </div>
            </div>
        </div>
    `;

    document.getElementById("modal").style.display = "flex";
}


function toggleOverlay() {
  const overlay = document.getElementById("imageOverlay");
  overlay.style.display = overlay.style.display === "block" ? "none" : "block";
}

// Function to close modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
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
