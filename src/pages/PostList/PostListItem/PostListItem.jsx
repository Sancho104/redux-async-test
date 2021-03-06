import React from 'react';
import style from './PostListItem.module.scss';
import { Link } from 'react-router-dom';

const PostListItem = (props) => {
    return (
        <div>
            {
                !!props.item
                    ? <Link to={`/post/${props.item.id}`} className={style.link}>
                        <div className={style.userContainer}>
                            <div className={style.userNameContainer}>
                                <span>Name: </span> {props.item.user.name}
                            </div>
                            <div className={style.userUsernameContainer}>
                                <span>Username: </span>@{props.item.user.username}
                            </div>
                        </div>
                        <div className={style.titleContainer}>
                            {props.item.title}
                        </div>
                        <div className={style.bodyContainer}>
                            {props.item.body}
                        </div>

                    </Link>
                    : (
                        <div>
                            Loading...
                        </div>
                    )
            }
        </div>


    );
}

export default PostListItem;