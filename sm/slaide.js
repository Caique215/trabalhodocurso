'use strict';

const images = [
    { 'id': '1', 'url': 'cristo.png'},
    { 'id': '2', 'url': 'recanto.png'},
    { 'id': '3', 'url': 'cascata.png'},
    { 'id': '4', 'url': 'fontes.png'},
    { 'id': '5', 'url': 'teleferico.png'},
    { 'id': '6', 'url': 'thermas.png'},
    { 'id': '7', 'url': 'parque.png'},
    { 'id': '8', 'url': 'paquejose.png'},
    { 'id': '9', 'url': 'relogio.png'},
    { 'id': '10', 'url': 'mercado.png'},
   
  
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next); 