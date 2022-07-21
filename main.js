// adding a new image when button is clicked
function addImageToBody() {
  const img = document.createElement('img');
  img.src = 'https://picsum.photos/id/1061/300';
  img.alt = 'new image';
  document.body.appendChild(img);
}

document.querySelector('[data-btn]').addEventListener('click', addImageToBody);

function changeBodyBackgroundColor() {
  document.body.style.backgroundColor = '#123';
}

document.querySelector('#button').addEventListener('click', changeBodyBackgroundColor);

function toggleBackgroundColor() {
  document.querySelector('body').classList.toggle('toggle-background');
}

document.querySelector('#toggle').addEventListener('click', toggleBackgroundColor);

document.querySelector('[data-another-btn]').addEventListener('click', function () {
  const h1 = document.createElement('h1');
  h1.textContent = 'homepage';
  // h1.innerHTML = 'homepage';
  h1.style.textTransform = 'capitalize';
  h1.style.textAlign = 'center';
  document.body.appendChild(h1);
});
