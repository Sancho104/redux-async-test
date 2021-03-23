import { connect } from 'react-redux';
import Post from './pages/PostDetails/post';
import { createActionComments } from './store/reduceComments';

const mapStateToProps = (state) => {
    return {
        comments: state.reduceComments.comments,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getComments: (id) => {
            dispatch(createActionComments(id));
        }
    }
}

const ContainerComments = connect(mapStateToProps, mapDispatchToProps)(Post);

export default ContainerComments;