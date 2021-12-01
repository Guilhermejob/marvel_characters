import React from 'react';
import {CharactersProvider} from './CharactersProviders';

const Providers = ({children}) => {
  return <CharactersProvider>{children}</CharactersProvider>;
};

export default Providers;
