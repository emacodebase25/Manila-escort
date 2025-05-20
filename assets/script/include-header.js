// js/include-header.js
fetch('/assets/components/header.html')
  .then((res) => res.text())
  .then((data) => {
    document.getElementById('header-placeholder').innerHTML = data;
    setActiveNavLink(); // run after header is inserted
  });

function setActiveNavLink() {
  const path = window.location.pathname;
  const page = path.split('/').pop(); // ex: 'booking.html'

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.classList.remove('active');
    const href = link.getAttribute('href');

    if (
      href === page ||
      (href === '/index.html' && (page === '' || page === 'index.html'))
    ) {
      link.classList.add('active');
    }
  });
}
