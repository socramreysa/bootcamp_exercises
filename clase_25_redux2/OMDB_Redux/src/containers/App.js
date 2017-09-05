import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionCreators.js';
import Main from './Main';

//guarda el store en los props
function mapStateToProps(state) {
	return {
		movies: state.movies.movies,
		movie: state.movie.movie,
		user: state.user,
		registering: state.registering,
		favotites: state.favorites
	}
};

//le pasa la funcionalidad dispatch a los props
function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
};

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;