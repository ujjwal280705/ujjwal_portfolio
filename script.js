const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

// Check browser local storage for any previously saved preferences
const currentTheme = localStorage.getItem('theme');

// Apply the saved theme instantly on page load
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.className = 'fa-solid fa-sun'; // Swaps icon to sun in dark mode
}

// Toggle click logic
themeToggleBtn.addEventListener('click', () => {
    let theme = 'light';
    
    // Check if currently dark, switch to light, or vice versa
    if (document.documentElement.getAttribute('data-theme') !== 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fa-solid fa-sun';
        theme = 'dark';
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeIcon.className = 'fa-solid fa-moon';
    }
    
    // Save selection value into local memory cache
    localStorage.setItem('theme', theme);
});



