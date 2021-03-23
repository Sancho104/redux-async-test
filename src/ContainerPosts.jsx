import { connect } from 'react-redux';
import PostList from './pages/PostList/PostList';
import { createActionPosts } from './store/reducePosts';

const mapStateToProps = (state) => {
    return {
        posts: state.reducePosts.posts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => {
            dispatch(createActionPosts());
        }
    }
}

const ContainerPosts = connect(mapStateToProps, mapDispatchToProps)(PostList);

export default ContainerPosts;