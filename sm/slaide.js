'use strict';

const images = [
    { 'id': '1', 'url': 'https://pocosdecaldas.mg.gov.br/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-08-at-20.20.42.jpeg'},
    { 'id': '2', 'url': 'http://www.tguiando.com.br/wp-content/uploads/2012/01/Pocos-de-Caldas-Recanto-Japones-8.jpg'},
    { 'id': '3', 'url': 'https://guiaturisticopocosdecaldas.com.br/wp-content/uploads/2019/08/rad7250A201762720575_787.jpg'},
    { 'id': '4', 'url': 'https://media-cdn.tripadvisor.com/media/photo-s/04/46/09/e8/fonte-dos-amores.jpg'},
    { 'id': '5', 'url': 'https://hotelbalneariopc.com.br/gdd/sgc/imagens/foto_texto/23/rad390DA20181021152311_504.jpg'},
    { 'id': '6', 'url': 'http://pocoscom.com/wp-content/uploads/2017/02/thermas.jpg'},
    { 'id': '7', 'url': 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/7f/47/7e/barco-pirata.jpg?w=700&h=-1&s=1'},
    { 'id': '8', 'url': 'https://media-cdn.tripadvisor.com/media/photo-s/0d/e9/48/c6/fonte-no-centro-do-parque.jpg'},
    { 'id': '9', 'url': 'http://1.bp.blogspot.com/-EDr093_FGzM/UQXVzkeLPqI/AAAAAAAAH58/Sy_3v664myQ/w1200-h630-p-k-no-nu/rel%C3%B3gio1.jpg'},
    { 'id': '10', 'url': 'https://s2.glbimg.com/_Avu-DD2hIB2Y6ypin26Mkc3YyM=/0x0:1700x1065/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/K/f/UKtlPERducUsNUUCAhBg/sabores-do-mercado-02-768x512.jpg'},
   
  
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