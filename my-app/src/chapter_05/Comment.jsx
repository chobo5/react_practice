import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        diplay: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};

function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img
                    src="https://www.chosun.com/resizer/v2/ZYPY6QMIOX2MLIDAHFVSAK3V4M.jpg?auth=a480083a83d7e5b8fe76e49a1e8a281f507b72ff882ef45ac6cbd58c99166ec0&width=464"
                    alt="avartar"
                    style={styles.image}/>
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
}

export default Comment;