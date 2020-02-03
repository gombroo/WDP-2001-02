import { connect } from 'react-redux';
import Blog from './Blog';
import { getAll } from '../../../redux/blogRedux';

const mapStateToProps = (state) => ({
  posts: getAll(state),
});

export default connect(mapStateToProps)(Blog);
