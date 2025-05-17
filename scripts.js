// Get DOM elements
const themeBtn = document.getElementById('themeBtn');
const body = document.body;
const animationBox = document.querySelector('.animation-box');
const speedSelect = document.getElementById('animationSpeed');

// Load saved preferences
const savedTheme = localStorage.getItem('theme') || 'light';
const savedSpeed = localStorage.getItem('animationSpeed') || 'normal';

// Apply saved preferences
body.className = savedTheme;
speedSelect.value = savedSpeed;
animationBox.className = `animation-box ${savedSpeed}`;

// Theme switcher
themeBtn.addEventListener('click', () => {
    const newTheme = body.className === 'light' ? 'dark' : 'light';
    body.className = newTheme;
    localStorage.setItem('theme', newTheme);
    
    themeBtn.classList.add('clicked');
    setTimeout(() => themeBtn.classList.remove('clicked'), 300);
});

// Animation speed control
speedSelect.addEventListener('change', (e) => {
    const speed = e.target.value;
    animationBox.className = `animation-box ${speed}`;
    localStorage.setItem('animationSpeed', speed);
});