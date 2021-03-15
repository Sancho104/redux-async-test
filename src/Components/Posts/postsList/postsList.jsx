import React, { Children } from 'react';
import style from './postsList.module.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Post from '../Comments/comments';


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
                <Link to={`/${props.item.id}`}
                    onClick={hideListPosts}
                >
                    {props.item.title}
                </Link>

                <Route path={`/${props.item.id}`} >
                    {props.children}
                </Route>

            </div>

        </Router>
    )
}

export default PostList;