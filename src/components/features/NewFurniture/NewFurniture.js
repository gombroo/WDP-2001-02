import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import Swipeable from '../../common/Swipeable/Swipeable';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    isUnmounted: false,
  };

  unmountTrue() {
    this.setState({ isUnmounted: true });
  }

  unmountFalse() {
    setTimeout(() => this.setState({ isUnmounted: false }), 1000);
  }

  handlePageChange = newPage => {
    this.unmountTrue();
    setTimeout(() => this.setState({ activePage: newPage }), 1100);
    this.unmountFalse();
  };

  handleCategoryChange(newCategory) {
    this.unmountTrue();
    setTimeout(() => this.setState({ activeCategory: newCategory }), 1100);
    this.unmountFalse();
  }

  render() {
    let pageItems;
    const { categories, products, toggleCompare, viewport } = this.props;
    const { activeCategory, activePage } = this.state;

    if (viewport.mode === 'desktop') {
      pageItems = 8;
    } else if (viewport.mode === 'tablet') {
      pageItems = 4;
    } else {
      pageItems = 1;
    }

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / pageItems);

    const comparedProducts = products.filter(product => product.compare);
    const handleCompare = (e, id) => {
      e.preventDefault();
      toggleCompare(id);
    };

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : undefined}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={
                          item.id === activeCategory ? styles.active : undefined
                        }
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <Swipeable
            itemsCount={pagesCount}
            activeItem={this.state.activePage}
            swipeAction={this.handlePageChange}
          >
            <div className='row'>
              {categoryProducts
                .slice(activePage * pageItems, (activePage + 1) * pageItems)
                .map(item => (
                  <div key={item.id} className='col-12 col-md-6 col-lg-4 col-xl-3'>
                    <ProductBox
                      productId={item.id}
                      isUnmounted={this.state.isUnmounted}
                    />
                  </div>
                ))}
            </div>
          </Swipeable>

          {comparedProducts.length >= 1 && (
            <div className={styles.compare_box}>
              <div className={styles.compare_list}>
                <div className={styles.compare_list_left}>
                  <p>Added for comparison:</p>
                  {comparedProducts.map(product => (
                    <div className={styles.compare_item} key={product.id}>
                      <img
                        src={product.photo}
                        width='40'
                        height='40'
                        alt={product.category}
                      ></img>
                      <Link
                        className={styles.mobile_close}
                        onClick={e => handleCompare(e, product.id)}
                      ></Link>
                    </div>
                  ))}
                </div>
                <div className={styles.compare_list_right}>
                  <Button variant='small'>Compare</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.object,
      newFurniture: PropTypes.bool,
    })
  ),
  toggleCompare: PropTypes.func,
  viewport: PropTypes.object,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
