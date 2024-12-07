import React from "react";

function Book(props) {
    return (
        <div>
            <h1>{`The Title of this book is ${props.name}`}</h1>
            <h2>{`This book has ${props.numOfPage} pages`}</h2>
        </div>
    )
}

export default Book;