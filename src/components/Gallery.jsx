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


export default Gallery;
