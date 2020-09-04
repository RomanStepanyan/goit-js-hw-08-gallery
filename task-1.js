import images from './gallery-items.js'

const modalWindowRef = document.querySelector('.js-lightbox');
const galleryUlRef = document.querySelector('.js-gallery');
const imglightboxRef = document.querySelector('.lightbox__image');
const btnCloseModalRef = document.querySelector('.lightbox__button');
const lightboxContainer = document.querySelector('.lightbox__content');
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

images.forEach(image => {
    const liTags = creatingLiTag(image);
    liTags.setAttribute('class', 'gallery__item');
    const aTags = creatingATag(image);
    aTags.setAttribute('class', 'gallery__link');
    aTags.setAttribute('href', image.original);
    const imgTags = creatingImgTag(image);
    imgTags.setAttribute('class', 'gallery__image');
    imgTags.setAttribute('src', image.preview);
    imgTags.setAttribute('alt', image.description);
    imgTags.setAttribute('data-source', image.original);
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
    if (event.target === btnCloseModalRef || lightboxContainer){        
        console.log('event.target', event.target);
        console.log('event.currentTarget', event.currentTarget)
        modalWindowRef.classList.remove('is-open');
        imglightboxRef.src = '';
    } 
})