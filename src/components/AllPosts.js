import React from 'react';
import { Link } from 'react-router-dom';

const AllPosts = (props) => {
    return(
        <>
            <h2>All posts!</h2>
            {props.posts.map((post) =>
                <Link to={`/posts/${post.uid}`}><h3>{post.title}</h3></Link>
            )}
        </>
    )
}

export default AllPosts;