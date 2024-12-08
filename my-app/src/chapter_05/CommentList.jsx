import React from "react";

import Comment from "./Comment";

const comments = [
    {
        name: "chobo5",
        comment: "hello, this is chobo5"
    },
    {
        name: "gosu",
        comment: "hi chobo, this is gosu"
    },
    {
        name: "extra",
        comment: "are you good at react?"
    }

]


function CommentList(props) {
    return (
        <div>
        {comments.map(e => {
            return <Comment name={e.name} comment={e.comment}/>
        })}
        </div>
    );
}

export default CommentList;