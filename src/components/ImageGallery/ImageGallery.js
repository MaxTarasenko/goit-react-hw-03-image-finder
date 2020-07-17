import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ collection, searchName, onClick }) => {
  return (
    <div>
      <ul className="ImageGallery">
        {collection.map(({ id, webformatURL, largeImageURL }) => (
          <li className="ImageGalleryItem" key={id}>
            <ImageGalleryItem
              webformatURL={webformatURL}
              searchName={searchName}
              largeImageURL={largeImageURL}
              onClick={onClick}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
