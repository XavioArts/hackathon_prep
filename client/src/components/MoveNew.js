import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const MoveNew = () => {

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [element, setElement] = useState("");
    const [dmg, setDmg] = useState(null);

    const {id} = useParams();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newMove = {
            name: name,
            desc: desc,
            element: element,
            dmg: dmg,
        };
        await axios.post(`/api/champs/${id}/moves`, newMove);
        navigate(`/champs/${id}`);
    };

    return (
        <div>
            <h1>Add a New Ability</h1>
            <Link to={`/champs/${id}`}>Go back</Link>
            <p>Please enter move info</p>
            <form onSubmit={handleSubmit}>
                <p>Move name:</p>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <p>Move element:</p>
                <input value={element} onChange={(e) => setElement(e.target.value)} />
                <p>Move description:</p>
                <input value={desc} onChange={(e) => setDesc(e.target.value)} />
                <p>Base damage:</p>
                <input value={dmg} onChange={(e) => setDmg(e.target.value)} />
                <button>Create move</button>
            </form>
        </div>
    )

};

export default MoveNew;