import React from "react";

function Avartar(props) {
    return (
        <div>
            <img src={props.url} alt={props.alt} />
        </div>
    );
}

export default Avartar;