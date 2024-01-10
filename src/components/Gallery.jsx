import { useState, useRef } from "react";

const Image = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const imageRef = useRef(null);

  function closeModal(e) {
    if (e.target.classList.contains("modal")) {
      document.body.removeChild(e.target);
    }
  }

  function showImage(e) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.addEventListener("click", closeModal);

    const image = document.createElement("img");
    image.classList.add("gallery_images");
    image.src = imageSrc;
    image.alt = alt;

    modal.appendChild(image);
    console.log(modal);
    document.body.appendChild(modal);
    setImageSrc(imageRef.current.src);
  }

  return (
    <div onClick={showImage}>
      <img className=" h-auto max-w-full rounded-lg cursor-pointer" src={src} alt={alt} />
    </div>
  );
};

const Gallery = () => {
  const images = [
    {
      src: "/img/gallery1.png",
      alt: "Gallery image",
    },
    {
      src: "/img/gallery2.png",
      alt: "Gallery image",
    },
    {
      src: "/img/gallery3.png",
      alt: "Gallery image",
    },
    {
      src: "/img/gallery4.jpg",
      alt: "Gallery image",
    },
    {
      src: "/img/gallery5.jpg",
      alt: "Gallery image",
    },
    {
      src: "/img/gallery6.jpg",
      alt: "Gallery image",
    },
    {
      src: "/img/gallery7.jpg",
      alt: "Gallery image",
    },
    {
      src: "/img/gallery8.jpg",
      alt: "Gallery image",
    },
    {
      src: "/img/gallery9.jpg",
      alt: "Gallery image",
    },
  ];

  return (
    <section id="gallery">
      <h2 className="service__title">Work Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Image key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </section>
  );
};

const Gallery2 = () => {
  return (
    <div id="gallery">
      <div className="gallery_heading">
        <h1>
          Photo <span>Gallery</span>
        </h1>
      </div>
      <div className="gallery_container">
        <div className="gal_container">
          <div className="gal_text">
            <h2>Work with passion</h2>
            <p>
              We work with passion, dedicating ourselves to delivering excellence in every service.
            </p>
          </div>
          <div className="gal_img">
            <img src="/img/gallery1.png" alt="Gallery image" />
          </div>
        </div>

        <div className="gal_container">
          <div className="gal_img">
            <img src="/img/gallery2.png" alt="Gallery image" />
          </div>
          <div className="gal_text">
            <h2>Innovative and creative</h2>
            <p>
              Innovative and creative solutions are at the heart of our approach, ensuring every
              project is infused with fresh ideas.
            </p>
          </div>
        </div>

        <div className="gal_container">
          <div className="gal_text">
            <h2>Close like family</h2>
            <p>
              Our team is more than colleagues. We're a close-knit family working together for
              success. Feel free to join us to experience the same thing
            </p>
          </div>
          <div className="gal_img">
            <img src="/img/gallery3.png" alt="Gallery image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
