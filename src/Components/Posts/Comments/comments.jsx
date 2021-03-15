import axios from 'axios';
import React, { useState } from 'react';
import style from './post.module.css'


const Comments = (props) => {
    // debugger
    // console.log(props)
    return (
        <div className={style.container}>



            <br />

            <div>
                <span>Name: {props.itemComment.name}</span>
                <br />
                <span>Email: {props.itemComment.email}</span>
                <br />
                <span><i>Message: </i>{props.itemComment.body}</span>
                <br />
                <br />
            </div>

        </div>
    )
}

export default Comments;