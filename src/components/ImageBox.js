import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import { IoMdImages } from "react-icons/io";

import FsLightbox from "fslightbox-react";

export default function ImageBox({ images, open }) {
  // const [photoIndex, setPhotoIndex] = useState(0);
  // const [isOpen, setIsOpen] = useState(false);

  // return (
  //   <div>
  //     <IoMdImages style={{cursor:'pointer'}} size="1.5em" type="button" onClick={() => setIsOpen(true)}/>
  //     {isOpen && (
  //       <Lightbox
  //         mainSrc={images[photoIndex]}
  //         nextSrc={images[(photoIndex + 1) % images.length]}
  //         prevSrc={images[(photoIndex + images.length - 1) % images.length]}
  //         onCloseRequest={() => setIsOpen(false)}
  //         onMovePrevRequest={() =>
  //           setPhotoIndex((photoIndex + images.length - 1) % images.length)
  //         }
  //         onMoveNextRequest={() =>
  //           setPhotoIndex((photoIndex + 1) % images.length)
  //         }
  //       />
  //     )}
  //   </div>
  // );
  const [toggler, setToggler] = useState(false);

  return (
    <div  className=" action-button">
        <IoMdImages
          style={{ cursor: "pointer" }}
          type="button"
          onClick={() => setToggler(!toggler)}
        />
      <FsLightbox toggler={toggler} sources={images} />
    </div>
  );
}
