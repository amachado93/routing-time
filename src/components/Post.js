import React from 'react';

const Post = (props) => {
    console.log(props);
    const foundPost = props.posts.filter(post =>
        post.uid === props.id    
    )
    return(
        <div>
            <h4>{foundPost[0].title}</h4>
            <p>{foundPost[0].author}</p>
            <p>{foundPost[0].content}</p>
        </div>
    )
}

export default Post;