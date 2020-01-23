import { connect } from 'react-redux';
import StarRating from './StarRating';
import { getProductById, addRating } from '../../../redux/productsRedux';

const mapStateToProps = (state, props) => {
  const product = getProductById(state, props.productId);
  return {
    stars: product.stars,
  };
};

const mapDispatchToProps = dispatch => ({
  addRating: data => dispatch(addRating(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StarRating);
