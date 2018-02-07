
import {applyMiddleware, createStore } from "redux";
import {createLogger} from "redux-logger";
import combine from "./reducers/combine";
import thunk from "redux-thunk";


const middleware = applyMiddleware(thunk, createLogger());
export default createStore(combine, middleware);
