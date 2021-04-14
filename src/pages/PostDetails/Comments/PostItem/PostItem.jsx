import React from 'react';
import style from './PostItem.module.scss';

const PostItem = (props) => {
    return (
        <div>
            {
                (!!props.user && !!props.item)
                    ?
                    <div className={style.link}>
                        <div className={style.titleContainer}>
                            {props.item.title}
                        </div>
                        <div className={style.userContainer}>
                            <div className={style.userNameContainer}>
                                <span className={style.userName}>Name: </span> {props.user.name}
                            </div>
                            <div className={style.userUsernameContainer}>
                                <span>Username: </span>@{props.user.username}
                            </div>
                        </div>

                        <div className={style.bodyContainer}>
                            {props.item.body}
                        </div>
                    </div>
                    : (
                        <div>
                            Loading...
                        </div>
                    )
            }

        </div>
    );
}

export default PostItem;