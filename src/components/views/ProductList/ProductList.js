import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

import ProductBox from '../../common/ProductBox/ProductBoxContainer';

const ProductList = ({ products }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-9'>
          <div className='row'>
            {products.map(product => (
              <div key={product.id} className='col-6 col-md-4'>
                <ProductBox  {...product} />
              </div>
            ))}
          </div>
        </div>
        <div className='col-md-3'>
          Tu będą filtry
        </div>
      </div>
    </div>

  </div>);

ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;
