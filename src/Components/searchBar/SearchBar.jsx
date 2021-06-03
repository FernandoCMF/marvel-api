import React from 'react';
import './SearchBar.css';

const searchBar = ({gBusca, vBusca, uBusca}) => {
  return (
    <div>
      <form className="search-form" onSubmit={gBusca}>
        <input className="search-bar"
          type="text"
          value={vBusca}
          onChange={uBusca}
        />
        <button className="search-button" type="submit">Buscar</button>
      </form>
    </div>
  );
}

export default searchBar;