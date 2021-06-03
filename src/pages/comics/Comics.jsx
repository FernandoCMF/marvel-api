import React, { useEffect, useState } from 'react';
import api from '../../service/Api';
import "./Comics.css";
import SearchBar from '../../Components/searchBar/SearchBar';

const Comics = () => {

    const [personagens, setPersonagens] = useState([]);
    const [busca, setBusca] = useState("");
    const [consulta, setConsulta] = useState('spider-man');

    useEffect(() => {
         api.get(`/comics?title=${consulta}`)
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
            <SearchBar gBusca={getBusca} vBusca={busca} uBusca={updateBusca}/>
            {
                personagens.map(per => (

                    <div className="container-card" key={`${per.id}`}>
                        <div className="card">
                            
                        <h1 className="card-titulo">{per.title}</h1>
                            <img
                                className="imagens"
                                src={`${per.thumbnail.path}/standard_fantastic.${per.thumbnail.extension}`}
                                alt="thumbnail"
                            />
                            
                            <div className="card-corpo">
                                <p className="sobre">{per.description}</p>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    );
}

export default Comics;