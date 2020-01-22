import { connect } from 'react-redux';
import StarRating from './StarRating';
import { getProductById } from '../../../redux/productsRedux';

const mapStateToProps = (state, props) => {
  const product = getProductById(state, props.productId);
  return {
    stars: product.stars,
  };
};

/*const mapDispatchToProps = dispatch => ({
  toggleFavs: id => dispatch(toggleFavs(id)),
});*/

export default connect(mapStateToProps)(StarRating);
