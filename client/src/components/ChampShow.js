import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ChampShow = () => {
    
    const [moves, setMoves] = useState([]);
    const [champion, setChampion] = useState({});
    const { id } = useParams();

    const getData = async () => {
        let champRes = await axios.get(`/api/champs/${id}`);
        let res = await axios.get(`/api/champs/${id}/moves`);
        setChampion(champRes.data);
        setMoves(res.data);
    };

    useEffect(()=> {
        getData();
    }, []);

    const renderMoves = () => {
        return moves.map((move) => {
            return (
                <div style={styles.container}>
                    <h4><Link to={`/champs/${champion.id}/moves/${move.id}`} style={styles.link}>{move.name}</Link></h4>
                    <p>Damage: {move.dmg}</p>
                </div>
            );
        });
    };

    return (
        <div style={styles.center}>
            <h1>-The Hero of the Multiverse-</h1>
            <h1>{champion.name}</h1>
            <p>Alignment: {champion.align}</p>
            <h4>Health: {champion.health}</h4>
            <h4>Power Level: {champion.power}</h4>
            {/* link to edit here  */}
            <Link to={`/champs/${champion.id}/edit`}>Edit hero?</Link>
            <h2>{champion.name}'s Abilities</h2>
            {renderMoves()}
            {/* link to new move here  */}
            <div style={styles.containerNew}>
                <Link to={`/champs/${champion.id}/new`} style={styles.link}>Add a new move/ability</Link>
            </div>
        </div>
    )
};

const styles = {
    container: {
        backgroundColor: "orange",
        margin: "20px",
        padding: "10px",
        width: "500px",
        maxWidth: "500px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    containerNew: {
        backgroundColor: "gold",
        margin: "20px",
        padding: "10px",
        width: "300px",
        maxWidth: "300px",
    },
    link: {
        textDecoration: "none",
        color: "black",
        margin: "1em"
    },
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }
}

export default ChampShow;