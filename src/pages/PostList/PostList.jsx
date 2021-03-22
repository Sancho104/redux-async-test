import React, { useEffect, useState } from 'react';
import PostListItem from './PostListItem/PostListItem';
import axios from 'axios';

const PostList = (props) => {
    const [posts, setPosts] = useState();
    useEffect(() => {
        props.getPosts();
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(function (response) {
        //         setPosts(response.data);
        //         // console.log(posts)

        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //     });
    }, []);

    return (
        <div>
            {!!props.posts
                ? props.posts.map((item) => <PostListItem item={item} key={item.id} />)
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

