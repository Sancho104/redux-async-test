import React, { useEffect, useState } from 'react';
import PostListItem from './PostListItem/PostListItem';
import axios from 'axios';

const PostList = (props) => {
    const [posts, setPosts] = useState();
    let a = 10
    useEffect(() => {
        props.getPosts();
        props.getUsers();
        console.log(props);
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(function (response) {
        //         setPosts(response.data);
        //         // console.log(posts)

        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //     });
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

