import axios from 'axios';
import React, { useState } from 'react';
import style from './comments.module.css'


const Comments = (props) => {
    // debugger
    // console.log(props)
    return (
        <div className={style.container}>
            <div>
                <div className={style.nameContainer}>Name: {props.itemComment.name}</div>
                <div className={style.emailContainer}>Email: {props.itemComment.email}</div>
                <div className={style.bodyContainer}>Message: {props.itemComment.body}</div>
            </div>

        </div>
    )
}

export default Comments;