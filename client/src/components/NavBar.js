import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div style={styles.container}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/champs" style={styles.link}>Heroes</Link>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: "black",
        padding: "10px"
    },
    link: {
        textDecoration: "none",
        color: "white",
        margin: "1em"
    }
}

export default NavBar;