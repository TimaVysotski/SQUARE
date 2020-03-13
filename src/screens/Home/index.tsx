import React, { ReactElement } from 'react';
import { SafeAreaView, Text } from 'react-native';
import i18n from '../../config';

const Home = (): ReactElement => (
  <SafeAreaView>
    <Text>{i18n.t('home.title')}</Text>
  </SafeAreaView>
);

export default Home;
