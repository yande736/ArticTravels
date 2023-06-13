const menu = document.querySelector('.toggle-btn');
const links = document.querySelectorAll('.links');

menu.addEventListener('click', () => {
    links.classList.toggle('active');
});