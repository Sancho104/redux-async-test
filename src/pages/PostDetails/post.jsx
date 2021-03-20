import React from 'react';
import style from './post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={style.headlerPost}>
                Post:
            </div>
            <div className={style.postContainer}>

                <div className={style.postTitle}>
                    {props.post.title}
                </div>
                <div className={style.postBody}>
                    {props.post.body}
                </div>
            </div>
            <div className={style.containerComments}>
                Comments:
            </div>
        </div>
    );
}

export default Post;