import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducers } from "./reducers";
import web3 from "../sagas";

const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => createStore(reducers, applyMiddleware(sagaMiddleware));

configureStore();

sagaMiddleware.run(web3);
