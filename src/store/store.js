import axios from "axios";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { reduceComments } from "./reduceComments";
import { reducePosts } from "./reducePosts";

const reducer = combineReducers({
    reducePosts,
    reduceComments,
});

export const store = createStore(reducer, applyMiddleware(thunk));