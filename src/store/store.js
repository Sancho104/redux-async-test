import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { commentsReducer } from "./Comments/reducer";
import { postsReducer } from "./Posts/reducer";
import reduceUsers from "./Users/reducer";

const reducer = combineReducers({
    postsReducer,
    commentsReducer,
    reduceUsers,
});

export const store = createStore(reducer, applyMiddleware(thunk));