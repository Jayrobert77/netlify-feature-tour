console.log("PLM Wisdom App Loaded"); // Debug log

// Array of ancient wisdom quotes
const wisdoms = [
  "As above, so below; as within, so without.",
  "The lips of wisdom are closed, except to the ears of understanding.",
  "Know thyself, and you will know the universe.",
  "The stone the builders rejected became the cornerstone.",
  "The light you seek is already within you.",
];

// Initialize app
function initApp() {
  console.log("Initializing app...");

  const button = document.getElementById("reveal-btn");
  const messageDiv = document.getElementById("wisdom-message");

  button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * wisdoms.length);
    const selectedWisdom = wisdoms[randomIndex];
    console.log("Revealed wisdom:", selectedWisdom);
    messageDiv.textContent = `✦ ${selectedWisdom} ✦`;
  });
}

window.onload = initApp;
