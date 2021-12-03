import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <img src={"https://cdnb.artstation.com/p/assets/images/images/009/372/991/4k/alexandre-godbille-beauty1-water.jpg?1518612268"} alt={"home portal"} width={"100%"} />
            <p>Click below to enter and view the Champions of the Multiverse</p>
            <div style={{margin: "auto", padding: "10px", backgroundColor: "green", width: "400px"}}>
                <Link to="/champs" style={{textDecoration: "none", color: "white", fontSize: "2em"}}>Enter the Heroes Portal</Link>
            </div>
        </div>
    );
};

export default Home;