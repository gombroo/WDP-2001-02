import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FeaturedCarousel from '../../common/FeaturedCarousel/FeaturedCarousel';
import FeaturedBox from '../../common/FeaturedBox/FeaturedBox';

import styles from './FeaturedSection.module.scss';
import Swipeable from '../../common/Swipeable/Swipeable';

class FeaturedSection extends Component {

  state = {
    activeProduct: 0,
    isUnmounted: false,
  };

  componentDidMount() {
    this.interval = setInterval(() => this.handlePageChange(
      (this.state.activeProduct === this.props.hotDeals.length - 1) ?
        0 :
        this.state.activeProduct + 1
    ), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  unmountTrue() {
    this.setState({ isUnmounted: true });
  }

  unmountFalse() {
    setTimeout(() => this.setState({ isUnmounted: false }), 1000);
  }

  handlePageChange = newProduct => {
    this.unmountTrue();
    setTimeout(() => this.setState({ activeProduct: newProduct }), 1100);
    this.unmountFalse();
  };

  render() {
    const { hotDeals, featuredCategories } = this.props;
    const { activeProduct } = this.state;

    const productsCount = hotDeals.length;

    const dots = [];
    for (let i = 0; i < productsCount; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => {
              this.handlePageChange(i);
              clearInterval(this.interval);
              setTimeout(() => this.interval = setInterval(() => this.handlePageChange(
                (this.state.activeProduct === this.props.hotDeals.length - 1) ?
                  0 :
                  this.state.activeProduct + 1
              ), 3000), 7000);
            }}
            className={i === activeProduct ? styles.active : undefined}
          >
          </a>
        </li>
      );
    }

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <Swipeable
              itemsCount={productsCount}
              activeItem={this.state.activeProduct}
              swipeAction={this.handlePageChange}
            >
              <div className={styles.root}>
                <div className={styles.header}>
                  Hot deals
                  <div className={styles.dots}>
                    <ul>
                      {dots}
                    </ul>
                  </div>
                </div>
                {hotDeals
                  .slice(activeProduct * 1, (activeProduct + 1) * 1)
                  .map(item => (
                    <FeaturedBox
                      key={item.id}
                      isUnmounted={this.state.isUnmounted}
                      toggleCompare={this.props.toggleCompare}
                      toggleFavs={this.props.toggleFavs}
                      comparedItems={this.props.comparedItems}
                      {...item}
                    />
                  ))}
              </div>
            </Swipeable>
          </div>


          <div className='col-8'>
            <FeaturedCarousel featuredCategories={featuredCategories} />
          </div>
        </div>
      </div>
    );
  }
}

FeaturedSection.propTypes = {
  hotDeals: PropTypes.array,
  toggleCompare: PropTypes.func,
  toggleFavs: PropTypes.func,
  comparedItems: PropTypes.array,
  featuredCategories: PropTypes.array,
};

export default FeaturedSection;
