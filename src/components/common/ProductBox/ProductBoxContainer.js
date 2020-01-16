import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { getProductById, toggleFavs } from '../../../redux/productsRedux';

const mapStateToProps = (state, props) => {
  const product = getProductById(state, props.bob);
  return {
    ...product,
  };
};

const mapDispatchToProps = dispatch => ({
  toggleFavs: id => dispatch(toggleFavs(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
