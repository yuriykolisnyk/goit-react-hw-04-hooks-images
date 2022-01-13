import PropTypes from 'prop-types';

function Button({ onClick }) {
  const scroll = () => {
    onClick();
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.clientHeight - 130,
        behavior: 'smooth',
      });
    }, 500);
  };

  return (
    <button onClick={scroll} className="Button" type="button">
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
