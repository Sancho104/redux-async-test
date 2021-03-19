import React from 'react';
import style from './postsList.module.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";


const PostList = (props) => {
    // console.log(props)
    const hideListPosts = () => {
        // props.setControlPost(false)
        props.getComments(props.item);
        props.setPost(props.item)
    }
    return (
        <Router>
            <div className={style.container}>
                <Link to={`/${props.item.id}`} onClick={hideListPosts} className={style.link}>
                    <div className={style.titleContainer}>
                        {props.item.title}
                    </div>
                    <div className={style.bodyContainer}>
                        {props.item.body}
                    </div>

                </Link>
                <Route path={`/${props.item.id}`}>
                    {props.children}
                </Route>
            </div>
        </Router>
    );
}

export default PostList;