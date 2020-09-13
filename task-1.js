import images from './gallery-items.js'

const modalWindowRef = document.querySelector('.js-lightbox');
const galleryUlRef = document.querySelector('.js-gallery');
const imglightboxRef = document.querySelector('.lightbox__image');

const creatingLiTag = () =>{
    const li = document.createElement('li');
    return li;
} 
const creatingATag = () =>{
   const a = document.createElement('a');
   return a;
} 
const creatingImgTag = () => {
  const img = document.createElement('img');
  return img
} 
  
const classRemove = () =>{
    modalWindowRef.classList.remove('is-open');
    imglightboxRef.src = '';
}
function createElement(name, attrs = {}) {
    const element = document.createElement(name)
    for(let key in attrs) {
        element.setAttribute(key, attrs[key])
    }
    return element
}

images.forEach(image => {
    const liTags = createElement('li', {'class': 'gallery__item'});   
    const aTags = createElement('a', {'class':'gallery__link', 'href':image.original});   
    const imgTags = createElement('img', {'class':'gallery__image', 'src': image.preview, 
    'alt':image.description, 'data-source': image.original})  
    aTags.appendChild(imgTags);
    liTags.appendChild(aTags);    
    galleryUlRef.appendChild(liTags)
})
galleryUlRef.addEventListener('click', event => {
    event.preventDefault();
    modalWindowRef.classList.add('is-open');
    imglightboxRef.src = event.target.dataset.source;
})

modalWindowRef.addEventListener('click', event =>{
    if (event.target.nodeName === 'IMG') return
    classRemove()
})
window.addEventListener('keydown', event =>{
    if(event.key === 'Escape') classRemove();    
})

