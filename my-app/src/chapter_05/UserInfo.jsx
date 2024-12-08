import React from "react";
import Avartar from "./Avartar";

function UserInfo(props) {
    return (
        <div>
            <Avartar url={props.avartarUrl}/>
            <span>{props.nickName}</span>
        </div>
    );
}

export default UserInfo;

