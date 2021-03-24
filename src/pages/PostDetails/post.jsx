import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PostListItem from '../PostList/PostListItem/PostListItem';
import Comments from './Comments/comments';
import style from './post.module.css'


const Post = (props) => {
    const { id } = useParams();
    const { userId } = useParams();
    // const [comments, setComments] = useState();
    useEffect(() => {
        props.getComments(id);
        props.getUser();
        props.getPosts()
        // console.log(props)
        // axios.get('https://jsonplaceholder.typicode.com/comments',
        //     {
        //         params: {
        //             postId: id,
        //         }
        //     })
        //     .then(function (response) {
        //         setComments(response.data);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }, []);

    const findPost = postId => props.posts[postId - 1];
    const filterUser = (userId, callback) => {
        return props.users[userId]
    }

    const findUserId = (callback) => {
        let a = callback(id);
        return a.userId;
    }

    return (
        <div>
            <div>
                {
                    (!!props.users && !!props.posts)
                        ? (

                            <div>
                                <PostListItem item={findPost(id)} user={filterUser(1)} />
                                {/* <PostListItem item={findPost(id)} user={filterUser(findUserId(findPost))} /> */}
                            </div>
                        )
                        : (
                            <div>
                                Error...
                            </div>
                        )
                }
            </div>
            <div>
                <div className={style.containerComments}>
                    Comments:
            </div>
                {
                    !!props.comments && !!props.users
                        ? props.comments.map((item) => <Comments item={item} key={item.id} post={props} />)
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