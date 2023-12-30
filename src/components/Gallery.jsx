import React from 'react';

const Gallery = () => {
  // Array of image sources
  const images = [
    '/img/service.webp',
    '/img/service.webp',
    '/img/service.webp',
    '/img/service.webp',
    '/img/service.webp',
    '/img/service.webp',

  ];

  return (
    <div id='gallery'>
    <div className='gallery_section'>
      <h1 className='gallery_text'>My Gallery</h1>
      <div className='gallery_grid'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className='gallery_image'
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Gallery;