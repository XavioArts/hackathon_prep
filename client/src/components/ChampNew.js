import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const ChampNew = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [align, setAlign] = useState("");
    const [health, setHealth] = useState(null);
    const [power, setPower] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // make sure the page doesnt reload
        const newChamp = {
            name: name,
            align: align,
            health: health,
            power: power,
        };
        await axios.post("/api/champs", newChamp);
        navigate("/champs");
    };

    return (
        <div>
            <h1>Who is your hero?</h1>
            <p>Please enter your new champion info</p>
            <p>*Note: all fields must be filled</p>
            {/* form will go here  */}
            <form onSubmit={handleSubmit}>
                <p>Champion name:</p>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <p>Champion alignment:</p>
                <input value={align} onChange={(e) => setAlign(e.target.value)} />
                <p>How much health does your hero have? *only numbers allowed</p>
                <input value={health} onChange={(e) => setHealth(e.target.value)} />
                <p>What is your champion's power level? *only numbers allowed</p>
                <input value={power} onChange={(e) => setPower(e.target.value)} />
                <button>Create Hero</button>
            </form>
        </div>
    );
};

export default ChampNew;