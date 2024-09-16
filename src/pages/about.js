import '../styles/components.scss';

const callForm = document.getElementById('callForm');
const openDialogBtn = document.getElementById('callFormBtn');

openDialogBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  callForm.classList.add('active');
  document.querySelector('body').classList.add('no-scroll');
});

callForm.children[0].addEventListener('click', (e) => {
  e.stopPropagation();
});

document.addEventListener('click', () => {
  callForm.classList.remove('active');
  document.querySelector('body').classList.remove('no-scroll');
});
