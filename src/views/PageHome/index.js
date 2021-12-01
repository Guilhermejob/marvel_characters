import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import HerosList from '../../components/HerosList';

export default props => {
  return (
    <SafeAreaView>
      <ScrollView>
        <HerosList />
      </ScrollView>
    </SafeAreaView>
  );
};
