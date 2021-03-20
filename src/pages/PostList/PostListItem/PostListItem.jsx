import React, { useState } from 'react';
import style from './PostListItem.module.scss';
import { Link } from "react-router-dom";
import axios from 'axios';


const PostListItem = (props) => {
    // console.log(props)


    return (
        <Link to={`/post/${props.item.id}`} className={style.link}>
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