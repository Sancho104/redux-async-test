import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { reduceComments } from "./reduceComments";
import { reducePosts } from "./reducePosts";
import reduceUsers from "./Users/reducer";

const reducer = combineReducers({
    reducePosts,
    reduceComments,
    reduceUsers,
});

export const store = createStore(reducer, applyMiddleware(thunk));