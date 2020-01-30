import { connect } from 'react-redux';
import FeaturedSection from './FeaturedSection';
import { getHotDeals } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  hotDeals: getHotDeals(state),
});

export default connect(mapStateToProps)(FeaturedSection);
