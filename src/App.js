/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import Routes from './Routes/index';
import Providers from '../src/Providers/index';

export default props => {
  return (
    <Providers>
      <View style={{flex: 1}}>
        <Routes />
      </View>
    </Providers>
  );
};
