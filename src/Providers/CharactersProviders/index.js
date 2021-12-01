import React, {createContext, useState, useContext, useEffect} from 'react';
import axios from 'axios';

export const CharactersContext = createContext({});

export const CharactersProvider = ({children}) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(30);

  useEffect(() => {
    if (characters.len !== 0) {
      axios
        .get(
          'http://gateway.marvel.com/v1/public/characters?limit=30&offset=0&ts=1637868772&apikey=f04f434fb749b64888857af022a13700&hash=fd1a1ff831d289a2dcc96f32c4e32537',
        )
        .then(response => {
          setCharacters(response.data.data.results);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CharactersContext.Provider value={{characters}}>
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharacters = () => useContext(CharactersContext);
