import React from 'react';
import PropTypes from 'prop-types';
import { Swipe } from 'react-swipe-component';

const Swipeable = ({ children, swipeAction, activePage, pagesCount }) => {
  const onSwipedRight = () => {
    if (activePage - 1 >= 0) {
      swipeAction(activePage - 1);
    }
  };

  const onSwipedLeft = () => {
    if (activePage + 1 < pagesCount) {
      swipeAction(activePage + 1);
    }
  };

  return (
    <Swipe
      nodeName='div'
      detectTouch='true'
      onSwipedLeft={onSwipedLeft}
      onSwipedRight={onSwipedRight}
    >
      {children}
    </Swipe>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  swipeAction: PropTypes.func,
  activePage: PropTypes.number,
  pagesCount: PropTypes.number,
};

export default Swipeable;
