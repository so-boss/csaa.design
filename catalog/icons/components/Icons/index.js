import React from 'react';
import t from 'prop-types';

const icons = {
};

const Icon = ({ name, size, className, style, ...props }) => {
  const ChosenIcon = icons[name];

  if (!ChosenIcon) {
    throw new Error(`Cannot find icon '${name}'`);
  }

  return (
    <svg
      {...props}
      width={size}
      height={size}
      viewBox={ChosenIcon.viewBox}
      style={{ ...style, width: size, height: size }}
      className={`${className ? className + ' ' : ''}Icon ${ChosenIcon.className}`}>
      {ChosenIcon.path}
    </svg>
  );
};

Icon.propTypes = {
  name: t.string,
  className: t.string,
  size: t.number,
  style: t.object
};

Icon.defaultProps = {
  size: 25
};

export default Icon;


