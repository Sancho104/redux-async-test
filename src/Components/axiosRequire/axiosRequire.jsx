import React, { useEffect, useState } from "react";
import axios from 'axios';
import Posts from "../Posts/Posts";
// import { getState } from "../../store/store";
let state;
const AxiosRequire = (props) => {
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



    useEffect(() => {
        require()
        // console.log('use effect')
        // props.getState(props.createActionPosts('POSTS'))
        //     .then(function (response) {
        //         a = <Posts posts={response} />
        //         state = response
        //         console.log(state)

        //         return state
                
        //     })

    });

    const postsUpdate = () => {
        require();
        console.log(state);
    }
    let a;
    if (posts) {
        a = <Posts posts={posts} />
        
    }
    function getStat() {
        if (state) {
            console.log(state)
            debugger
            return state
        } else {
            setTimeout(() => {
                getStat()
            }, 500);
        }
    }

    setInterval(() => {
        // debugger
        // console.log(state)
    }, 2000);

    return (
        <div>

            <div>
                {a}
                { }
                {/* {(!state) ? getStat() : <Posts posts={state} />} */}
            </div>
        </div>
    );
}



export default AxiosRequire;