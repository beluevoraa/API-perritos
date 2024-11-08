document.getElementById('fetch-dog').addEventListener('click', fetchDogImage);

function fetchDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      const imgContainer = document.getElementById('dog-image');
      imgContainer.innerHTML = ''; // Limpiar la imagen anterior
      const img = document.createElement('img');
      img.src = data.message;
      img.alt = 'Imagen de un perro';
      img.style.maxWidth = '100%';
      imgContainer.appendChild(img);
    })
    .catch(error => console.error('Error:', error));
}

const fetchButton = document.getElementById('fetch-dog');
const closeButton = document.getElementById('close-btn');
const dogImageContainer = document.getElementById('dog-image');

fetchButton.addEventListener('click', fetchDogImage);
closeButton.addEventListener('click', closeImage);

function fetchDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      dogImageContainer.style.display = 'block';
      dogImageContainer.querySelector('img').src = data.message;
    })
    .catch(error => console.error('Error:', error));
}

function closeImage() {
  dogImageContainer.style.display = 'none';
}
