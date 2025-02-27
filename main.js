let shuffleMenu = document.querySelector("nav .shuffle-icon-menu");
let shuffleClose = document.querySelector("nav .sidebar .shuffle-icon-close");
let sidebar = document.querySelector("nav .sidebar");
// Hanlde Shuffle click
shuffleMenu.addEventListener("click", () => {
  // Toggle sidebar
  sidebar.classList.add("open");
});

shuffleClose.addEventListener("click", () => {
  // Toggle Sidebar
  sidebar.classList.remove("open");
});

// Check for width
window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    sidebar.classList.remove("open");
  }
});

// Close the window if user clicked anywhere rather than navside
window.addEventListener("click", (e) => {
  if (
    sidebar.classList.contains("open") &&
    !sidebar.contains(e.target) &&
    !shuffleMenu.contains(e.target)
  ) {
    sidebar.classList.remove("open");
  }
});
