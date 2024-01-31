

const toggle = document.querySelector('#toggle');


const priceContainer = document.querySelector('.contenedor-flex');




toggle.addEventListener('change', () => {
  
  priceContainer.classList.toggle('mostrar');
});