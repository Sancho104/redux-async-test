import React, { useEffect, useState } from 'react';
import PostListItem from './PostListItem/PostListItem';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState();


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                setPosts(response.data);
                // console.log(posts)

            })
            .catch(function (error) {
                console.log(error)
            });
    }, []);
    return (
        <div>
            {!!posts
                ? posts.map((item) => <PostListItem item={item} key={item.id}/>)
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

