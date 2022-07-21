//document.getElementById('heading').style.color = "rgb(120, 200, 90)";
//document.getElementById('heading').style.backgroundColor = '#ff0';

document.querySelector('#heading').style.color = '#00ff00';
document.querySelector('.heading').style.backgroundColor = '#0000ff';
//document.querySelector('h1').style.color = '#099'
//document.querySelector('[data-h1]').style.color = 'rgb(20, 100, 10)';
//document.querySelector('body').style.backgroundColor = '#f11';
// document.body.style.backgroundColor = '#f11';

document.querySelector('p').classList.add('my-new-class');
document.querySelector('body').classList = 'my-custom-body-class';
document.querySelector('p').setAttribute('id', 'my-custom-id');
document.querySelector('[data-image]').setAttribute('alt', 'my random sample image');
document.querySelector('[data-h1]').style.setProperty('color', '#f66');

// var name;
// const tel = 021123456;
// let country = 'new zealand';

const h4 = document.createElement('h4');
h4.innerHTML = 'hello world!';
document.body.appendChild(h4);

const p = document.createElement('p');
p.textContent = 'hello world again!';
p.style.color = '#f11';
p.classList.add('some-class');
const section = document.querySelector('#text');
section.appendChild(p);

function myFirstFunction() {
  document.body.style.backgroundColor = 'red';
}

// myFirstFunction()


/* this function creates a 
new image and 
attaches it to the figure element */
function createNewImage() {
  const image = document.createElement('img');
  // image.setAttribute('src', 'https://picsum.photos/id/111/200');
  image.src = 'https://picsum.photos/id/111/200';
  image.width = 180;
  image.alt = 'random photo from picsum photos';
  image.classList = 'image-class';
  const imageHolder = document.querySelector('[data-fig]');
  imageHolder.appendChild(image);
}

createNewImage()
