import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

import ProductBox from '../../common/ProductBox/ProductBoxContainer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faThList } from '@fortawesome/free-solid-svg-icons';

const ProductList = ({
  products,
  match: {
    params: { categoryId },
  },
}) => {
  const [sortPattern, setSortPattern] = useState('default');
  const [sortedProducts, setSortedProducts] = useState(products);
  const handleSort = event => {
    setSortPattern(event.target.value);
    console.log(sortPattern);
  };
  useEffect(() => {
    if (sortPattern === 'highestPrice') {
      const sorted = sortedProducts.sort((a, b) => {
        if (a.promo && b.promo) {
          return ((100 - a.promo.discount) * 0.01 * a.price - (100 - b.promo.discount) * 0.01 * b.price);
        } else if (a.promo && !b.promo) {
          return (100 - a.promo.discount) * 0.01 * a.price - b.price;
        } else if (!a.promo && b.promo) {
          return a.price - (100 - b.promo.discount) * 0.01 * b.price;
        } else {
          return a.price - b.price;
        }
      });
      setSortedProducts(sorted);
    } else if (sortPattern === 'lowestPrice') {
      const sorted = sortedProducts.sort((a, b) => {
        if (a.promo && b.promo) {
          return ((100 - b.promo.discount) * 0.01 * b.price - (100 - a.promo.discount) * 0.01 * a.price);
        } else if (!a.promo && b.promo) {
          return (100 - b.promo.discount) * 0.01 * b.price - a.price;
        } else if (a.promo && !b.promo) {
          return b.price - (100 - a.promo.discount) * 0.01 * a.price;
        } else {
          return b.price - a.price;
        }
      });
      console.log(sorted);
      setSortedProducts(sorted);
    }
  }, [sortPattern, sortedProducts]);
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-9'>
            <div
              className={
                'row no-gutters align-items-center justify-content-between ' +
                styles.heading
              }
            >
              <div className={'col-auto ' + styles.category}>
                {categoryId ? categoryId : 'furniture'}
              </div>
              <div className={'col-auto ' + styles.sort}>
                <form>
                  <label htmlFor='sorting'>Sort By</label>
                  <select id='sorting' onClick={handleSort}>
                    <option value='lowestPrice'>Price: Low to High</option>
                    <option value='highestPrice'>Price: High to Low</option>
                    <option value='review'>Avg. Customer Review</option>
                    <option value='default'>Default order</option>
                  </select>
                </form>
              </div>
              <div className={'col-auto ' + styles.show}>
                <form>
                  <label htmlFor='show'>Show</label>
                  <select id='show'>
                    <option value={24}>24</option>
                    <option value={48}>48</option>
                    <option value='all'>all</option>
                  </select>
                </form>
              </div>
              <div className={'col-auto ' + styles.displayType}>
                <form>
                  <label className={styles.radioGrid}>
                    <input type='radio' id='productsGrid' name='view-option' readOnly />
                    <FontAwesomeIcon icon={faThLarge} className=' fa'></FontAwesomeIcon>
                  </label>
                  <label className={styles.radioList}>
                    <input type='radio' id='productsList' name='view-option' readOnly />
                    <FontAwesomeIcon icon={faThList} className='fa '></FontAwesomeIcon>
                  </label>
                </form>
              </div>
            </div>

            <div className='row'>
              {sortedProducts.map(product => (
                <div key={product.id} className='col-12 col-md-6 col-lg-4'>
                  <ProductBox {...product} />
                </div>
              ))}
            </div>
          </div>
          <div className='col-md-3'>Tu będą filtry</div>
        </div>
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
  match: PropTypes.object,
};

export default ProductList;
