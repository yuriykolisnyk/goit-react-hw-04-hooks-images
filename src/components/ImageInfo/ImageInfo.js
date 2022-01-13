import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import imageAPI from '../ImageAPI/ImageAPI';
import ImageGallery from '../ImageGallery';
import Button from '../Button';
import { Oval } from 'react-loader-spinner';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function ImageInfo({ imageName, images, page, setImages, setPage }) {
  const [status, setStatus] = useState(Status.IDLE);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    if (imageName === '') {
      return;
    }

    setStatus(Status.PENDING);

    imageAPI
      .fetchImages(imageName, page)
      .then(newImages => {
        if (newImages.total > 0) {
          setImages(prevImages => [...prevImages, ...newImages.hits]);
          setStatus(Status.RESOLVED);
          newImages.total < 12 ? setShowButton(false) : setShowButton(true);
        } else return Promise.reject(new Error('Invalid request'));
      })
      .catch(err => {
        setStatus(Status.REJECTED);
      });
  }, [imageName, page, setImages]);

  if (status === Status.IDLE) {
    return <p className="SearchForm-message">Please enter your search term</p>;
  }

  if (status === Status.PENDING) {
    return <Oval wrapperClass="Loader" arialLabel="loading-indicator" />;
  }

  if (status === Status.REJECTED) {
    return <p className="SearchForm-message">Sorry, something went wrong</p>;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <ImageGallery images={images} />
        {showButton && <Button onClick={() => setPage(page + 1)} />}
      </>
    );
  }
}

ImageInfo.propTypes = {
  imageName: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  setImages: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default ImageInfo;
