import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from './Comments/comments';
import style from './post.module.css'


const Post = (props) => {
    const { id } = useParams();
    const { userId } = useParams();
    // const [comments, setComments] = useState();
    useEffect(() => {
        props.getComments(id);
        props.getUser();
        console.log(props.info)
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

    return (
        <div>
            <div>
                {
                    !!props.users
                        ? (

                            <div>
   
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