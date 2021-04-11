import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Post from './pages/PostDetails/post';
import { createActionComments, reduceComments } from './store/reduceComments';
import { reduceUsers } from './store/reduceUsers';
import { createActionUsers, crateActionUserItem } from './store/reduceUsers';
import { createActionPosts, reducePosts } from "./store/reducePosts";

const mapStateToProps = (state, props) => {
    return {
        comments: state.reduceComments.comments,
        users: state.reduceUsers.users,
        posts: state.reducePosts.posts,
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