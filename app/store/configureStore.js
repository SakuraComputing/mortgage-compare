import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import comparisonReducer from '../reducers/comparisons';
import quoteReducer from '../reducers/quotes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            quotes: quoteReducer,
            comparisons: comparisonReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}



