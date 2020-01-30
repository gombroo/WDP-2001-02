import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

import ProductBox from '../../common/ProductBox/ProductBoxContainer';

const ProductList = ({ products, match: { params: { categoryId } } }) => (
  <div className={styles.root}>
    <div className='container'>

      <div className='row'>
        <div className='col-12 col-md-9'>

          <div className='row'>
            <div className={'col ' + styles.category}>
              {categoryId}
            </div>
            <div className={'col'}>
              <form>
                <label htmlFor="sorting">Sort By</label>
                <select id="sorting">
                  <option value="lowestPrice">Price: Low to High</option>
                  <option value="highestPrice">Price: High to Low</option>
                  <option value="review">Avg. Customer Review</option>
                  <option value="default">Default order</option>
                </select>
              </form>
            </div>
            <div className={'col'}>
              <form>
                <label htmlFor="show">Show</label>
                <select id="show">
                  <option value={24}>24</option>
                  <option value={48}>48</option>
                  <option value="all">all</option>
                </select>
              </form>
            </div>
            <div className={'col-1'}>
              <form>
                <input type="radio" id="productsGrid" name="view-option" className={styles.radioGrid} checked />
                <input type="radio" id="productsList" name="view-option" className={styles.radioList} />
              </form>
            </div>
          </div>

          <div className='row'>
            {products.map(product => (
              <div key={product.id} className='col-12 col-md-6 col-lg-4'>
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
  match: PropTypes.object,
};

export default ProductList;
