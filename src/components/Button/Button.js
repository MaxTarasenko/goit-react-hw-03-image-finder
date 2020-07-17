import React from 'react';

const Button = ({ onClick }) => {
  return (
    <div className="LoadMoreButton">
      <button type="submit" className="Button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;
