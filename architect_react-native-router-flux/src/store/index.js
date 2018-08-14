import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import ENV from '../config';
import rootReducer from '../reducer';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const enhancers = [applyMiddleware(...middlewares)];

let composeEnhancers = compose;
ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    (composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false
    }));

const store = createStore(rootReducer, composeEnhancers(...enhancers));
sagaMiddleware.run(rootSaga);

export default store;
