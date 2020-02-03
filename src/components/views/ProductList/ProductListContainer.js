import { connect } from 'react-redux';

import ProductList from './ProductList';

import { getProductsByCategory } from '../../../redux/productsRedux.js';

const mapStateToProps = (state, props) => ({
  products: getProductsByCategory(state, props.match.params.categoryId),
});

export default connect(mapStateToProps)(ProductList);
