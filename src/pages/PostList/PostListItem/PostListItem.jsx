import React, { useState } from 'react';
import style from './PostListItem.module.scss';
import { Link } from "react-router-dom";
import axios from 'axios';


const PostListItem = (props) => {
    // console.log(props)
    const [comments, setComments] = useState();
    function getComments(item) {
        axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + item.userId)
            .then(function (response) {
                setComments(response);
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <Link to={`/${props.item.id}`} className={style.link}>
            <div className={style.titleContainer}>
                {props.item.title}
            </div>
            <div className={style.bodyContainer}>
                {props.item.body}
            </div>

        </Link>
    );
}

export default PostListItem;