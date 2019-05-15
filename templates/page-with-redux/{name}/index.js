import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {{name_pc}} from './{{name_pc}}';

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state) {
	return {
		// user: state.user,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    // someAction: actionCreator
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)({{name_pc}});
