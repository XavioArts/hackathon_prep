import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Champs = () => {

    const [champs, setChamps] = useState([]);

    const getChamps = async () => {
        let result = await axios.get("/api/champs");
        setChamps(result.data);
        console.log(result.data);
    };
  
    useEffect(() => {
        getChamps();
    }, []);

    const renderChamps = () => {
        if (champs.length === 0) {
            return <h2>No champions, me lord!</h2>
        } else {
            return champs.map((champ) => {
                const renderMoves = () => {
                    return champ.moves.map((move) => <p>{move.name}</p>);
                };
                return (
                    <div style={styles.container}>
                        <h2><Link to={`/champs/${champ.id}`} style={styles.link}>{champ.name}</Link></h2>
                        <p>Power level: {champ.power}</p>
                        <p>Ablilities: {renderMoves()}</p>
                        {/* {useEffect(() => { renderMoves(champ.id); },[])} */}
                    </div>
                )
            })
        }
    }
    
    // addChamp updateChamp and deleteChamp will be here

    return (
        <div>
            <h1>Champions of the Multiverse</h1>
            <h3>Choose your hero:</h3>
            {renderChamps()}
        </div>
    )
};

const styles = {
    container: {
        backgroundColor: "blue",
        margin: "20px",
        padding: "10px",
        maxWidth: "800px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    link: {
        textDecoration: "none",
        color: "gold",
        margin: "1em"
    }
}

export default Champs;