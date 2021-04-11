import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostListItem from './PostListItem/PostListItem';
import { postsWithUserSelector } from '../../store/postsWithUserSelector';
import { getPosts } from '../../store/Posts/actions';
import { getUsers } from '../../store/Users/actions';

const PostList = () => {
    const postsWithUser = useSelector(postsWithUserSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <div>
            {!!postsWithUser.length
                ? postsWithUser.map((item) => <PostListItem item={item} key={item.id} />)
                : (
                    <div>
                        Loading...
                    </div>
                )
            }
        </div>
    );
}

export default PostList;

