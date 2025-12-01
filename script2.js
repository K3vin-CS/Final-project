const checkmark = document.querySelector('.checkmark');

if (checkmark) {
  checkmark.addEventListener('click', () => {
    checkmark.classList.toggle('active');
  });
}