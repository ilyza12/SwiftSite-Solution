import React from 'react';

const Gallery = () => {
  return (
    <div id='gallery'>
     
      <div className='gallery_heading'>
        <h1>Photo <span>Gallery</span></h1>
      </div>
    <div className='gallery_container'>
      <div className='gal_container'>
        <div className='gal_text'>
          <h2>Text inside here</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum,
                  voluptate quidem, quod, quae officiis</p>
        </div>
        <div className='gal_img'>
          <img src='/img/service.webp' alt='Gallery image'/>
        </div>
      </div>

      <div className='gal_container'>
      <div className='gal_img'>
          <img src='/img/service.webp' alt='Gallery image'/>
        </div>
      <div className='gal_text'>
          <h2>Text inside here</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum,
                  voluptate quidem, quod, quae officiis</p>
        </div>
      </div>

      <div className='gal_container'>
        <div className='gal_text'>
          <h2>Text inside here</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum,
                  voluptate quidem, quod, quae officiis</p>
        </div>
        <div className='gal_img'>
          <img src='/img/service.webp' alt='Gallery image'/>
        </div>
      </div>
      </div>
    </div>

  );
};

export default Gallery;

