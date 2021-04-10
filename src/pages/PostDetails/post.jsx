import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import PostListItem from '../PostList/PostListItem/PostListItem';
import Comments from './Comments/comments';
import style from './post.module.css'
import PostItem from './PostItem';

const Post = (props) => {
    const { id } = useParams();
    useEffect(() => {
        props.getComments(id);
        props.getUser();
        props.getPosts();
    }, []);

    const findPost = postId => {
        return props.posts.find((post) => post.id === +postId);
    }
    const post = findPost(id);

    return (
        <div>
            <PostItem item={post} user={props.users[post ? post.userId : <div>Loading...</div>]} />
            <div>
                <div className={style.containerComments}>
                    Comments:
                </div>
                {
                    (props.comments.length !== 0 && props.users.length !== 0)
                        ? props.comments.map((item) => <Comments item={item} key={item.id} post={props} />)
                        : (
                            <div>
                                Loading...
                            </div>
                        )
                }
            </div>
        </div>
    );
}

export default Post;