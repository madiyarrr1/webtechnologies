const popupBtn = document.getElementById('popupBtn');
const closePopup = document.getElementById('closePopup');
const myPopup = document.getElementById('myPopup');
const faqPopup = document.getElementById('faqPopup');
const closeFaq = document.getElementById('closeFaq');

const themeToggle = document.getElementById('theme-toggle');
const faqBtn = document.getElementById('faqBtn');

function applyTheme(theme) {
    document.body.classList.remove('day-theme', 'night-theme');
    document.body.classList.add(theme);
    themeToggle.checked = (theme === 'night-theme');
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

popupBtn.addEventListener('click', () => {
    myPopup.style.display = 'flex';
    setTimeout(() => {
        myPopup.classList.add('show');
    }, 10);
});

closePopup.addEventListener('click', () => {
    myPopup.classList.remove('show');
    setTimeout(() => {
        myPopup.style.display = 'none';
    }, 500);
});

faqBtn.addEventListener('click', () => {
    faqPopup.style.display = 'flex';
    setTimeout(() => {
        faqPopup.classList.add('show');
    }, 10);
});

document.getElementById('faqBtn').addEventListener('click', function() {
    faqPopup.classList.add('show');
});


faqPopup.addEventListener('click', function(event) {
    if (event.target === faqPopup) {
        faqPopup.classList.remove('show');
    }
});

window.addEventListener('click', (event) => {
    if (event.target === myPopup) {
        myPopup.classList.remove('show');
        setTimeout(() => {
            myPopup.style.display = 'none';
        }, 500);
    }
});

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
        const sound = document.getElementById('submitSound');
        sound.play();
        alert("Message sent!");
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        alert("Please, fill the fields!");
    }
}


