const harmbugger = document.getElementById("harmbugger");
const dropDown = document.getElementById("mobile");

harmbugger.addEventListener('click', () => {
  dropDown.classList.toggle('show');
  dropDown.classList.toggle('hide');
});