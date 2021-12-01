/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';

export default props => {
  return (
    <View style={{margin: 15}}>
      <Text style={{textAlign: 'center'}}>{props.nome}</Text>

      <View>
        <Image
          style={{width: 150, height: 150}}
          source={{
            uri: `${props.img}`,
          }}
        />
      </View>
    </View>
  );
};
