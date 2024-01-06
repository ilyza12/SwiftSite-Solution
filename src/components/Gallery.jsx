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
          <h2>Work with passion</h2>
          <p>We work with passion, dedicating ourselves to delivering excellence in every service.</p>
        </div>
        <div className='gal_img'>
          <img src='/img/gallery1.png' alt='Gallery image'/>
        </div>
      </div>

      <div className='gal_container'>
      <div className='gal_img'>
          <img src='/img/gallery2.png' alt='Gallery image'/>
        </div>
      <div className='gal_text'>
          <h2>Innovative and creative</h2>
          <p>Innovative and creative solutions are at the heart of our approach, ensuring every project is infused with fresh ideas.</p>
        </div>
      </div>

      <div className='gal_container'>
        <div className='gal_text'>
          <h2>Close like family</h2>
          <p>Our team is more than colleagues. We're a close-knit family working together for success. Feel free to join us to experience the same thing</p>
        </div>
        <div className='gal_img'>
          <img src='/img/gallery3.png' alt='Gallery image'/>
        </div>
      </div>
      </div>
    </div>

  );
};

export default Gallery;

