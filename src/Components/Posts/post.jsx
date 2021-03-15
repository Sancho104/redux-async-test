import React from 'react';
import style from './post.module.css'

const Post = (props) => {
    return (
        <div className={style.postContainer}>

            <div className={style.postTitle}>
                Header: {props.post.title}
            </div>
            <div className={style.postBody}>
                Text post: {props.post.body}
            </div>
            <br /><br />
            <div className={style.containerComments}>
                Comments:
        </div>

        </div>
    );
}

export default Post;