import { useState } from 'react';
import Searchbar from './components/Searchbar';
import ImageInfo from './components/ImageInfo';

import './App.css';

function App() {
  const [imageName, setImageName] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const handleFormSubmit = imageName => {
    setImageName(imageName);
    setImages([]);
    setPage(1);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageInfo
        imageName={imageName}
        images={images}
        page={page}
        setImages={setImages}
        setPage={setPage}
      />
    </>
  );
}

export default App;
