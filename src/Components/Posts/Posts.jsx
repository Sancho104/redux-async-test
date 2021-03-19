import React, { useState } from 'react';
import Comments from './Comments/comments';
import PostList from './postsList/postsList';
import axios from 'axios';
import Post from './post';

const Posts = (props) => {
    // debugger
    let postList = [];
    let showComments, showPost;
    const [controlPost, setControlPost] = useState(true);
    const [comments, setCommentsByEnternet] = useState();
    const [post, setPost] = useState();

    function getComments(item) {
        // debugger
        axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + item.userId)
            .then(function (response) {
                setCommentsByEnternet(response);
                console.log(response)
                setControlPost(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    let postsArrayList = props.posts.data.map((item, index) => {
        
        return (
            <PostList
                item={item}
                // setControlPost={setControlPost}
                getComments={getComments}
                setPost={setPost}
            />
        );
    });
    postList = postsArrayList
    if (!controlPost) {
        postList = '';
    }
    if (comments) {
        showComments = comments.data.map((i) => {
            return <Comments itemComment={i} />
        });
        showPost = <Post post={post} />
    }

    return (
        <div>
            {postList}
            {showPost}
            {showComments}
        </div>
    );
}

export default Posts;