import React, { useEffect } from 'react';
import PostListItem from './PostListItem/PostListItem';

const PostList = (props) => {
    useEffect(() => {
        props.getPosts();
        props.getUsers();
    }, []);

    const filterUser = (userId) => {
        return props.info[userId];
    }

    return (
        <div>
            {!!props.posts
                ? props.posts.map((item) => <PostListItem item={item} key={item.id} user={filterUser(item.userId)}/>)
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

