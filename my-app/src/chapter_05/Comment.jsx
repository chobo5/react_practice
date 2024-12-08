import React from "react";
import UserInfo from ".UserInfo"

function Comment(props) {
    return (
        <div>
            <UserInfo nickName={props.user.nickName} avartarUrl={props.user.avartarUrl}/>
            <span>{props.content}</span>
            <span>{props.createdDate}</span>
        </div>
    );
}

export default Comment;