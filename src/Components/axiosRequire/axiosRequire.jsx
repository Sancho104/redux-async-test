import React, { useEffect, useState } from "react";
import axios from 'axios';
import Posts from "../Posts/Posts";

const AxiosRequire = () => {
    const [posts, setPosts] = useState();
    function require() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {

                setPosts(response);
                // console.log(posts)

            })
            .catch(function (error) {
                console.log(error)
            })
    }

    let a;
    if (posts) {
        a = <Posts posts={posts} />

    }

    useEffect(() => {
        require()
    });

    const postsUpdate = () => {
        require();
        console.log(posts)
    }

    return (
        <div>
            <button onClick={postsUpdate}>Update posts</button>
            <div>
                {a}
            </div>
        </div>
    );
}



export default AxiosRequire;