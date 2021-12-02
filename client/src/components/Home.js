import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Click below to enter and view the Champions of the Multiverse</p>
            <Link to="/champs">Enter the Heroes Portal</Link>
        </div>
    );
};

export default Home;