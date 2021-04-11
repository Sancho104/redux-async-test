import { connect } from 'react-redux';
import Post from './post';
import { createActionComments } from '../../store/reduceComments';
import { getUsers } from '../../store/Users/actions';
import { getPosts } from "../../store/reducePosts";

const mapStateToProps = (state) => {
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
            dispatch(getPosts())
        },
        getUser: () => {
            dispatch(getUsers());
        },
    }
}

const ContainerComments = connect(mapStateToProps, mapDispatchToProps)(Post);

export default ContainerComments;