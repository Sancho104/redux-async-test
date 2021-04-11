import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Comments from './Comments/comments';
import style from './post.module.scss'
import PostItem from './Comments/PostItem/PostItem';
import { getComments } from '../../store/Comments/actions'
import { commentsSelector } from '../../store/Comments/selectors';
import { getPosts } from '../../store/Posts/actions';
import { postsSelector } from '../../store/Posts/selectors';
import { usersSelector } from '../../store/Users/selectors';
import { getUsers } from '../../store/Users/actions';

const Post = (props) => {
    const { id } = useParams();
    const comments = useSelector(commentsSelector);
    const posts = useSelector(postsSelector);
    const users = useSelector(usersSelector)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
        dispatch(getComments(id));
        dispatch(getUsers())
    }, [id, dispatch]);

    const findPost = postId => {
        return posts.find((post) => post.id === +postId);
    }
    const post = findPost(id);

    return (
        <div>
            <PostItem item={post} user={users[post ? post.userId : <div>Loading...</div>]} />
            <div>
                <div className={style.containerComments}>
                    Comments:
                </div>
                {
                    (comments.length && Object.keys(posts).length)
                        ? comments.map((item) => <Comments item={item} key={item.id} post={props} />)
                        : (
                            <div>
                                Loading...
                            </div>
                        )
                }
            </div>
        </div>
    );
}

export default Post;