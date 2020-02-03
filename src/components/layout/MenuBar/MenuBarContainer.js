import { connect } from 'react-redux';
import MenuBar from './MenuBar';
import { getAll } from '../../../redux/navCategoriesRedux';

const mapStateToProps = state => ({
  navCategories: getAll(state),
});

export default connect(mapStateToProps)(MenuBar);
