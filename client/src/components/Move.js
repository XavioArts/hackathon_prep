import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Move = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const { move } = location.state;
    const { name, desc, dmg, element, id, champ_id } = move;

    const handleDelete = async () => {
        await axios.delete(`/api/champs/${champ_id}/moves/${id}`);
        navigate(`/champs/${champ_id}`);
    };

    return (
        <div>
            <Link to={`/champs/${champ_id}`}>Back to Champion</Link>
            <h1>{name}</h1>
            <h3>Damage: {dmg}</h3>
            <p>Element: {element}</p>
            <h4>Description:</h4>
            <p>{desc}</p>
            <button onClick={()=>navigate(`/champs/${champ_id}/moves/${id}/edit`)}>Edit move?</button>
            <button onClick={()=>handleDelete()}>Delete move?</button>
        </div>
    )

};

export default Move;