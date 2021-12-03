import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

const MoveEdit = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {move} = location.state;
    const {id, champ_id, name: oldName, dmg: oldDmg, desc: oldDesc, element: oldElement} = move;

    const [name, setName] = useState(oldName);
    const [dmg, setDmg] = useState(oldDmg);
    const [desc, setDesc] = useState(oldDesc);
    const [element, setElement] = useState(oldElement);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newMove = {
            name: name,
            dmg: dmg,
            desc: desc,
            element: element,
        };
        await axios.put(`/api/champs/${champ_id}/moves/${id}`, newMove);
        navigate(`/champs/${champ_id}`);
    };

    return (
        <div>
            <Link to={`/champs/${champ_id}/moves/${id}`} state={{move}}>Go back to move</Link>
            <h1>Edit {oldName}?</h1>
            <form onSubmit={handleSubmit}>
                <p>Move name:</p>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <p>Move element:</p>
                <input value={element} onChange={(e) => setElement(e.target.value)} />
                <p>Move description:</p>
                <input value={desc} onChange={(e) => setDesc(e.target.value)} />
                <p>Base damage:</p>
                <input value={dmg} onChange={(e) => setDmg(e.target.value)} />
                <button>Submit changes</button>
            </form>
        </div>
    )

};

export default MoveEdit;