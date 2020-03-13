import { Container, Content } from 'native-base';
import React, { ReactElement } from 'react';
import i18n from '../../config';
import Label from '../../container/components/text/Label';

const Home = (): ReactElement => (
  <Container>
    <Content>
      <Label text={i18n.t('home.title')} />
    </Content>
  </Container>
);

export default Home;
