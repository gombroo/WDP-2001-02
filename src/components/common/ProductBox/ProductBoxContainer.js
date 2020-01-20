import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import {
  getProductById,
  toggleFavs,
  toggleCompare,
} from '../../../redux/productsRedux';

const mapStateToProps = (state, props) => {
  const product = getProductById(state, props.productId);
  return {
    ...product,
  };
};

const mapDispatchToProps = dispatch => ({
  toggleFavs: id => dispatch(toggleFavs(id)),
  toggleCompare: id => dispatch(toggleCompare(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
