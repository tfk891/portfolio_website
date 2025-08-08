// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.getElementById('mainContent');

function toggleSidebar() {
  hamburger.classList.toggle('active');
  sidebar.classList.toggle('open');
  mainContent.classList.toggle('blur');
}

hamburger.addEventListener('click', toggleSidebar);
hamburger.addEventListener('keypress', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    toggleSidebar();
  }
});

// Placeholder for future sidebar buttons functionality
// const institutionBtn = document.getElementById('institutionBtn');
// const socialMediaBtn = document.getElementById('socialMediaBtn');
// const informationBtn = document.getElementById('informationBtn');
