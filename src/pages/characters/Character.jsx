import React, { useEffect, useState } from 'react';
import "./Character.css";
import api from '../../service/Api';


const Characters = () => {

    const [personagens, setPersonagens] = useState([]);
    const [busca, setBusca] = useState("");
    const [consulta, setConsulta] = useState('hulk');

    useEffect(() => {
        api.get(`/characters?name=${consulta}`)
            .then(response => {
                setPersonagens(response.data.data.results)
                console.log(response.data.data.results);
            })
            .catch(err => console.log(err))
    }, [consulta])

    const updateBusca = e => {
        setBusca(e.target.value);
    }

    const getBusca = e => {
        e.preventDefault();
        setConsulta(busca);
        setBusca('');
    }

    return (
        <div className="container">
            <form className="search-form" onSubmit={getBusca}>
                <input className="search-bar"
                    type="text"
                    value={busca}
                    onChange={updateBusca}
                />
                <button className="search-button" type="submit">Buscar</button>
            </form>
            {
                personagens.map(per => (

                    <div className="container-card" key={`${per.id}`}>
                        <h1 className="card-titulo">{per.name}</h1>
                        <img
                            className="imagens"
                            src={`${per.thumbnail.path}/standard_fantastic.${per.thumbnail.extension}`}
                        />
                        <div className="card-corpo">
                            <p className="sobre">{per.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Characters;