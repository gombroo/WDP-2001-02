import React from 'react';
import PropTypes from 'prop-types';
import { Swipe } from 'react-swipe-component';

const Swipeable = ({ children, leftAction, rightAction }) => {
  return (
    <Swipe
      nodeName='div'
      className='col-3'
      onSwipedLeft={this.onSwipeLeftListener}
      onSwipedRight={this.onSwipeRightListener}
    >
      {children}
    </Swipe>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.bool,
  rightAction: PropTypes.bool,
};

export default Swipeable;
