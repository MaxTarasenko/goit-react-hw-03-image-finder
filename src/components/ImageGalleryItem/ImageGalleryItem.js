import React from 'react';

const ImageGalleryItem = ({
  webformatURL,
  searchName,
  onClick,
  largeImageURL,
}) => {
  return (
    <img
      src={webformatURL}
      alt={searchName}
      className="ImageGalleryItem-image"
      onClick={onClick}
      data-src={largeImageURL}
    />
  );
};

export default ImageGalleryItem;
