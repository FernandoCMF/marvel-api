import React, { useEffect, useState } from 'react';
import api from '../../service/Api';


const Characters = () => {

    const[personagens, setPersonagens] = useState([]);

    useEffect(() => {
        api.get('/characters').then(response => {
            setPersonagens(response.data.data.results)
            console.log(response.data.data.results);
        }).catch(err => console.log(err))
    },[])

    return (
        <div className="container">
            {
                personagens.map(per => (

                    <div className="coluna" key={`${per.id}`}>
                        <div className="card">
                            <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className="imagens"/>
                            <div className="card-body">
                                <p className="card-text">{per.name}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Characters;