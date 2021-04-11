import { createSelector } from "reselect";
import { usersSelector } from "./Users/selectors";
import { postsSelector } from './Posts/selectors';

export const postsWithUserSelector = createSelector(
    [postsSelector, usersSelector],
    (posts, users) => {
        if (!Object.keys(users).length) {
            return [];
        }
        return posts.map((post) => {
            const newPost = { ...post, user: users[post.userId] }
            return newPost;
        })
    });



