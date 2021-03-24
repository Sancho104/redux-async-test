import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Post from './pages/PostDetails/post';
import { createActionComments, reduceComments } from './store/reduceComments';
import { reduceUsers } from './store/reduceUsers';
import { createActionUsers } from './store/reduceUsers';
import { createActionPosts, reducePosts } from "./store/reducePosts";

const selectFindUser = (state, userId) => {

}
const selectUsers = state => state.reduceUsers.users
const selectComments = state => state.reduceComments.comments;

const getVisibleTodos = createSelector(
    [selectUsers, selectComments],
    (users, comments) => {
        return (users)
    }
  );

// const select = createSelector(
//     selectFindUser,
//     selectComments,
// )

const mapStateToProps = (state, props) => {
    return {
        comments: state.reduceComments.comments,
        users: state.reduceUsers.users,
        posts: state.reducePosts.posts,
        info: getVisibleTodos(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getComments: (id) => {
            dispatch(createActionComments(id));
        },
        getPosts: (postId) => {
            dispatch(createActionPosts(postId))
        },
        getUser: () => {
            dispatch(createActionUsers());
        }
    }
}

const ContainerComments = connect(mapStateToProps, mapDispatchToProps)(Post);

export default ContainerComments;