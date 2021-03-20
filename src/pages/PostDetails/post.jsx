import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from './Comments/comments';
import style from './post.module.css'


const Post = () => {
    const { id } = useParams();
    const [comments, setComments] = useState();
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments',
            {
                params: {
                    postId: id,
                }
            })
            .then(function (response) {
                setComments(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <div className={style.containerComments}>
                Comments:
            </div>
            {
                !!comments
                    ? comments.map((item) => <Comments item={item} key={item.id} />)
                    : (
                        <div>
                            Loading...
                        </div>
                    )
            }
        </div>
    );
}

export default Post;