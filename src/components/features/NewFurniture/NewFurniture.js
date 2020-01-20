import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    unmount: false,
  };

  unmountTrue() {
    this.setState({ unmount: true });
  }

  unmountFalse() {
    setTimeout(() => this.setState({ unmount: false }), 1000);
  }

  handlePageChange(newPage) {
    this.unmountTrue();
    setTimeout(() => this.setState({ activePage: newPage }), 1100);
    this.unmountFalse();
  }

  handleCategoryChange(newCategory) {
    this.unmountTrue();
    setTimeout(() => this.setState({ activeCategory: newCategory }), 1100);
    this.unmountFalse();
  }

  render() {
    const { categories, products, toggleCompare } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    const compareProducts = products.filter(product => product.compare);
    const handleCompare = (id, e) => {
      e.preventDefault();
      toggleCompare(id);
    };

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
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
                        className={item.id === activeCategory && styles.active}
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
          <div className='row'>
            {categoryProducts.slice(activePage * 8, (activePage + 1) * 8).map(item => (
              <div key={item.id} className='col-3'>
                <ProductBox productId={item.id} unmount={this.state.unmount} />
              </div>
            ))}
          </div>
          {compareProducts.length >= 1 && (
            <div className={styles.compare_box}>
              <div className={styles.compare_list}>
                <div className={styles.compare_list_left}>
                  <p>Added for comparison:</p>
                  {compareProducts.map(product => (
                    <div className={styles.compare_item} key={product.id}>
                      <img
                        src={product.photo}
                        width='40'
                        height='40'
                        alt={product.category}
                      ></img>
                      <Link
                        className={styles.mobile_close}
                        onClick={e => handleCompare(product.id, e)}
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
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  toggleCompare: PropTypes.func,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
