import React from 'react';
import style from './comments.module.css'


const Comments = (props) => {
    return (
        <div className={style.container}>
            <div>
                <div className={style.nameContainer}>Name: {props.item.name}</div>
                <div className={style.emailContainer}>Email: {props.item.email}</div>
                <div className={style.bodyContainer}>Message: {props.item.body}</div>
            </div>

        </div>
    )
}

export default Comments;