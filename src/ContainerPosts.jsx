import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PostList from './pages/PostList/PostList';
import { createActionPosts } from './store/reducePosts';
import { createActionUsers } from './store/reduceUsers';

const mapStateToProps = (state) => {
    return {
        posts: state.reducePosts.posts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => {
            dispatch(createActionPosts());
        },
        getUsers: () => {
            dispatch(createActionUsers())
        }
    }
}

const ContainerPosts = connect(mapStateToProps, mapDispatchToProps)(PostList);

export default ContainerPosts;