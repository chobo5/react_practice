import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="First met python" numOfPage={300}/>
            <Book name="First met aws" numOfPage={400}/>
            <Book name="First met react" numOfPage={500}/>
        </div>
    )
}

export default Library;
