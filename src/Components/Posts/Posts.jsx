import React, { useEffect, useState } from 'react';
import Comments from './Comments/comments';
import PostList from './postsList/postsList';
import axios from 'axios';
import Post from './post';

const Posts = (props) => {
    // debugger
    // console.log(props)
    let postList = [];
    let b;
    let c;
    let postsArray
    const [controlPost, setControlPost] = useState(true);
    const [comments, setCommentsByEnternet] = useState();
    const [post, setPost] = useState();



    function getComments(item) {

        console.log('get comments');
        // debugger
        axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + item.userId)
            .then(function (response) {
                setCommentsByEnternet(response);
                console.log(response)
                console.log(item);
                setControlPost(false);
                // console.log(b)
            })
            .then(function (response) {
                // console.log(comments)

                // debugger

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    let postsArrayList = props.posts.data.map((item, index) => {
        return (
            <PostList
                item={item}
                setControlPost={setControlPost}
                getComments={getComments}
                setPost={setPost}
            >
            </PostList>
        );
    });
    postList = postsArrayList
    if (!controlPost) {
        postList = ''
    }
    if (comments) {
        b = comments.data.map((i) => {
            return (
                <Comments itemComment={i} />
                    
                
            );
        });
        c = <Post post={post}/>

    }

    return (
        <div>
            {postList}
            {c}
            {b}
            {/* {postsArray} */}
        </div>
    );
}

export default Posts;