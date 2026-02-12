// Display last modified date
document.getElementById("lastModified").innerHTML = document.lastModified;

// Navigation menu elements
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

// Load nav menu state from localStorage
const navState = localStorage.getItem('navMenuState');
if (navState === 'open') {
    navbutton.classList.add('show');
    navlinks.classList.add('show');
} else {
    navbutton.classList.remove('show');
    navlinks.classList.remove('show');
}

// Toggle nav menu on button click
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');

    // Save current state to localStorage
    if (navbutton.classList.contains('show')) {
        localStorage.setItem('navMenuState', 'open');
    } else {
        localStorage.setItem('navMenuState', 'closed');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.querySelector('iframe[data-src]');
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            iframe.src = iframe.dataset.src;
            observer.unobserve(iframe);
        }
    });
    observer.observe(iframe);
});