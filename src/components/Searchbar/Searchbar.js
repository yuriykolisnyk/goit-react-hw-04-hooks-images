import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import toast, { Toaster } from 'react-hot-toast';

function Searchbar({ onSubmit }) {
  const [imageName, setImageName] = useState('');

  const handleSearchInput = e => {
    setImageName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (imageName.trim() === '') {
      toast.error(`Please enter your search term`);
      return;
    }

    onSubmit(imageName);
    setImageName('');
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleSubmit}>
          <button type="submit" className="SearchForm-button">
            {/* <span className="SearchForm-button-label">Search </span> */}
            <ImSearch />
          </button>
          <input
            className="SearchForm-input"
            type="text"
            name="name"
            value={imageName}
            onChange={handleSearchInput}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
