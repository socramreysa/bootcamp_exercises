import { REG_USER, REG_OK, FAILED_TO_REG } from '../actions/actionCreators';

function registeringReducer(state = {
	isReg: false,
	err: false
}, action) {

	switch (action.type) {

		case REG_USER:
			return Object.assign({}, state, {
				isReg: true,
				err: false
			});

		case REG_OK:
			return Object.assign({}, state, {
				isReg: false,
				err: false
			});

		case FAILED_TO_REG:
			return Object.assign({}, state, {
				isReg: false,
				err: true
			});

		default:
			return state;
	}
}

export default registeringReducer;