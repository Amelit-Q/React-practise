import React from 'react';
import classNames from 'classnames';

export const Button = ({ className, outline, children }) => {
  const handleClick = () => {
    return alert('Button was clicked!');
  };

  return (
    <button
      onClick={handleClick}
      className={classNames('button', className, {
        'button-outline': outline,
      })}>
      {children}
    </button>
  );
};
