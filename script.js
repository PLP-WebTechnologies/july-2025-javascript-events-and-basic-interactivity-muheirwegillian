// 🌙 Dark Mode Toggle
const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// 🎮 Counter Feature
let count = 0;
const counterDisplay = document.getElementById('counter');

document.getElementById('increase').addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count;
});

document.getElementById('decrease').addEventListener('click', () => {
  count--;
  counterDisplay.textContent = count;
});

document.getElementById('reset').addEventListener('click', () => {
  count = 0;
  counterDisplay.textContent = count;
});

// ❓ FAQ Toggle
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach((btn) => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// 📋 Form Validation
const form = document.getElementById('signup-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Clear old messages
  document.getElementById('name-error').textContent = '';
  document.getElementById('email-error').textContent = '';
  document.getElementById('password-error').textContent = '';
  document.getElementById('form-success').textContent = '';

  let valid = true;

  // Name validation: not empty
  const name = document.getElementById('name').value.trim();
  if (name === '') {
    document.getElementById('name-error').textContent = 'Name is required';
    valid = false;
  }

  // Email validation: regex
  const email = document.getElementById('email').value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById('email-error').textContent = 'Enter a valid email';
    valid = false;
  }

  // Password validation: at least 6 characters
  const password = document.getElementById('password').value.trim();
  if (password.length < 6) {
    document.getElementById('password-error').textContent = 'Password must be at least 6 characters';
    valid = false;
  }

  if (valid) {
    document.getElementById('form-success').textContent = '✅ Form submitted successfully!';
    form.reset();
  }
});
