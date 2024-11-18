
const currentTheme = localStorage.getItem('theme');
const body = document.getElementById('pageBody');
const faqPopup = document.getElementById('faqPopup');

const themeToggle = document.getElementById('theme-toggle');
const propertiesSection = document.querySelector('section.properties');

function applyTheme(theme) {
    document.body.classList.remove('day-theme', 'night-theme');
    document.body.classList.add(theme);
    themeToggle.checked = (theme === 'night-theme');

    if (propertiesSection) {
        propertiesSection.style.backgroundColor = theme === 'night-theme' ? '#333' : '#fff';
        propertiesSection.style.color = theme === 'night-theme' ? '#fff' : '#333';
    }
}

function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'day-theme';
    applyTheme(savedTheme);
}

applySavedTheme();

themeToggle.addEventListener('change', () => {
    const currentTheme = document.body.classList.contains('night-theme') ? 'night-theme' : 'day-theme';
    const newTheme = currentTheme === 'day-theme' ? 'night-theme' : 'day-theme';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme); 
});

document.getElementById('faqBtn').addEventListener('click', function() {
    faqPopup.classList.add('show');
});


faqPopup.addEventListener('click', function(event) {
    if (event.target === faqPopup) {
        faqPopup.classList.remove('show');
    }
});



const dateTimeElement = document.getElementById('currentDateTime');
const updateDateTime = () => {
    const now = new Date();
    dateTimeElement.textContent = now.toLocaleString();
};
updateDateTime();
setInterval(updateDateTime, 1000);

applySavedTheme();

document.addEventListener('DOMContentLoaded', () => {
    const currentDateTimeElem = document.getElementById('currentDateTime');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    currentDateTimeElem.innerText = now.toLocaleDateString('en-US', options);

    const hours = now.getHours();
    let greeting = 'Hello';
    if (hours < 12) {
        greeting = 'Good morning';
    } else if (hours < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }
    document.getElementById('greeting').innerText = greeting;
});

