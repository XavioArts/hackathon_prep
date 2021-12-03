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
                    </div>
                )
            })
        }
    }
    
    // addChamp updateChamp and deleteChamp will be here

    // const addChamp = (champ) => {
    //     setChamps([...champs, champ]);
    // };

    // const updateChamp = (champion) => {
    //     let updated = champs.map((champ) => (champ.id === champion.id ? champion : champ));
    //     setChamps(updated);
    // };

    // const deleteChamp = async (id) => {
    //     await axios.delete(`/api/champs/${id}`);
    //     let newChamps = champs.filter((champ) => champ.id !== id);
    //     setChamps(newChamps);
    // };

    return (
        <div style={styles.center}>
            <h1>Champions of the Multiverse</h1>
            <h3>Choose your hero:</h3>
            {renderChamps()}
            <div style={styles.containerNew}>
                <Link to="/champs/new" style={{textDecoration: "none", color: "black"}}>Add a Hero from your World</Link>
            </div>
        </div>
    )
};

const styles = {
    container: {
        backgroundColor: "blue",
        margin: "20px",
        padding: "10px",
        width: "700px",
        maxWidth: "700px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    containerNew: {
        backgroundColor: "gold",
        margin: "20px",
        padding: "10px",
        width: "500px",
        maxWidth: "500px",
        // display: "flex",
        // justifyContent: "space-evenly",
        // alignItems: "center",
    },
    link: {
        textDecoration: "none",
        color: "gold",
        margin: "1em"
    },
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }
}

export default Champs;