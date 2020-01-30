import { connect } from 'react-redux';

import ProductList from './ProductList';

import { getAll } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
});

export default connect(mapStateToProps)(ProductList);
