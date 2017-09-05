import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
	posts,
	comments
};

// making the visual store app from crhome happens
const enhancers = compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	);

const store = createStore(rootReducer, defaultState, enhancers);

//history
export const History = syncHistoryWithStore(browserHistory, store);

// for hot reload reducers like components do
if(module.hot) {
	module.hot.accept('./reducers/',() => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;