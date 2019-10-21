import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from "../reducers";
import rootSaga from "../saga/rootSaga";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export { store }
