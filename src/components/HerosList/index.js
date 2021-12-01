/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView} from 'react-native';
import CardHero from '../CardHero';
import {useCharacters} from '../../Providers/CharactersProviders';

const HerosList = props => {
  const {characters} = useCharacters();

  return (
    <View
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}>
      {characters.map(character => {
        return (
          <CardHero
            key={character.id}
            nome={character.name}
            img={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
        );
      })}
    </View>
  );
};

export default HerosList;
