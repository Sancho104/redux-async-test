import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Post from './pages/PostDetails/post';
import { createActionComments, reduceComments } from './store/reduceComments';
import { reduceUsers } from './store/reduceUsers';
import { createActionUsers, crateActionUserItem } from './store/reduceUsers';
import { createActionPosts, reducePosts } from "./store/reducePosts";

const selectFindUser = (state, userId) => {

}
const selectUsers = state => state.reduceUsers.users
const selectComments = state => state.reduceComments.comments;
const selectPosts = state => state.reducePosts.posts;

const getVisibleTodos = createSelector(
    [selectUsers, selectComments, selectPosts],
    (users, comments, posts) => {
        return (posts)
    }
  );

const mapStateToProps = (state, props) => {
    return {
        comments: state.reduceComments.comments,
        users: state.reduceUsers.users,
        itemUser: state.reduceUsers.item,
        posts: state.reducePosts.posts,
        // info: getVisibleTodos(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getComments: (id) => {
            dispatch(createActionComments(id));
        },
        getPosts: () => {
            dispatch(createActionPosts())
        },
        getUser: () => {
            dispatch(createActionUsers());
        },
    }
}

const ContainerComments = connect(mapStateToProps, mapDispatchToProps)(Post);

export default ContainerComments;