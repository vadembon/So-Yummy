import React from 'react';
import PropTypes from 'prop-types';

export const Icon = ({
  element: Element,
  color,
  size,
}) => {
  return (
    <span className="icon">
      <Element
        color={color}
        size={size}
      />
    </span>
  );
};

Icon.propTypes = {
  element: PropTypes.func.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

Icon.defaultProps = {
  color: 'inherit',
  size: 22,
};
