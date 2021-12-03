import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

const ChampEdit = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {champion} = location.state;
    const {id, name: oldName, align: oldAlign, power: oldPower, health: oldHealth} = champion;

    const [name, setName] = useState(oldName);
    const [align, setAlign] = useState(oldAlign);
    const [health, setHealth] = useState(oldHealth);
    const [power, setPower] = useState(oldPower);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newChamp = {
            name: name,
            align: align,
            health: health,
            power: power,
        };
        await axios.put(`/api/champs/${id}`, newChamp);
        navigate(`/champs/${id}`);
    };

    const handleDelete = async (e) => {
        // e.preventDefault();
        await axios.delete(`/api/champs/${id}`);
        navigate("/champs");
    };

    return (
        <div>
            <h1>Edit {oldName}?</h1>
            <button onClick={()=>handleDelete()}>Delete this hero?</button>
            <div style={styles.container}>
                <form onSubmit={handleSubmit}>
                    <p>Champion name:</p>
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                    <p>Champion alignment:</p>
                    <input value={align} onChange={(e) => setAlign(e.target.value)} />
                    <p>Champion health: *only numbers allowed</p>
                    <input value={health} onChange={(e) => setHealth(e.target.value)} />
                    <p>Champion power level: *only numbers allowed</p>
                    <input value={power} onChange={(e) => setPower(e.target.value)} />
                    <button>Submit changes</button>
                </form>
            </div>
            <button onClick={()=>navigate(`/champs/${id}`)}>Cancel</button>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: "tan",
        width: "800px",
        margin: "auto",
        padding: "15px"
    }
}

export default ChampEdit;