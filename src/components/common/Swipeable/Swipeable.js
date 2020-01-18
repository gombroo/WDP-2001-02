import React from 'react';
import PropTypes from 'prop-types';

const Swipeable = ({ children, leftAction, rightAction }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

Swipeable.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.bool,
  rightAction: PropTypes.bool,
};

export default Swipeable;
