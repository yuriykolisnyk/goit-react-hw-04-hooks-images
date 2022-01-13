import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';

function ImageGalleryItem({ src, alt, largeImageUrl }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <li className="ImageGalleryItem">
      <img onClick={toggleModal} src={src} alt={alt} className="ImageGalleryItem-image" />
      {showModal && <Modal onClose={toggleModal} src={largeImageUrl} alt={alt} />}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
