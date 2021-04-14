import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Comment from './Comments/comments';
import style from './post.module.scss'
import PostItem from './Comments/PostItem/PostItem';
import { getComments } from '../../store/Comments/actions'
import { commentsSelector } from '../../store/Comments/selectors';
import { getPosts } from '../../store/Posts/actions';
import { postsSelector } from '../../store/Posts/selectors';
import { usersSelector } from '../../store/Users/selectors';
import { getUsers } from '../../store/Users/actions';

const Post = () => {
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

    const post = useMemo(() => posts.find(post => post.id === +id), [id, posts]);

    return (
        <div>
            <PostItem item={post} user={users[post ? post.userId : <div>Loading...</div>]} />
            <div className={style.commentsContainer}>
                <div className={style.containerCommentsText}>
                    Comments:
                </div>
                {
                    (!!comments[id] && Object.keys(posts).length)
                        ? comments[id].map((item) => <Comment item={item} key={item.id} />)
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