import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PostList from './pages/PostList/PostList';
import { createActionPosts } from './store/reducePosts';
import { createActionUsers } from './store/reduceUsers';

const selectUsers = state => state.reduceUsers.users
const selectComments = state => state.reduceComments.comments;

const getVisibleTodos = createSelector(
    [selectUsers, selectComments],
    (users, comments) => {
        return (users)
    }
  );

const mapStateToProps = (state) => {
    return {
        posts: state.reducePosts.posts,
        info: getVisibleTodos(state)
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