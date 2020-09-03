import images from './gallery-items.js'

const galleryUlRef = document.querySelector('.js-gallery')
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
    liTags.class = 'gallery__item';
    const aTags = creatingATag(image);
    aTags.class = 'gallery__link';
    aTags.href = image.original;
    const imgTags = creatingImgTag(image);
    imgTags.class = 'gallery__image';
    imgTags.src = image.preview;
    imgTags.alt = image.description;
    imgTags.setAttribute('data-source', image.original);
    aTags.appendChild(imgTags);
    liTags.appendChild(aTags);    
    galleryUlRef.appendChild(liTags)
})
