import React, { ReactElement } from 'react';
import i18n from '../../config';
import Label from '../../container/components/text/Label';
import Card from '../../container/components/view/Card';
import CustomView from '../../container/components/view/CustomView';
import Container from '../../container/components/view/Container';
import Content from '../../container/components/view/Content';
import CustomSwitch from '../../container/components/button/Switch';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';

const Home = (): ReactElement => (
  <Container>
    <Content flex={1}>
      <Label
        mt={2}
        mb={2}
        ml={3}
        text={i18n.t('appName')}
        fontSize={fonts.HEADER_LABEL}
      />
      <CustomView>
        <Card flex={4} color={colors.CARD_SECONDARY} mt={2} mb ml={3} mr={3}>
          <CustomSwitch
            mt
            mb
            mr
            ml
            text={i18n.t('switchLabels.colors')}
            fontSize={fonts.SWITCH_LABEL}
          />
          <CustomSwitch
            mt
            mb
            mr
            ml
            text={i18n.t('switchLabels.figures')}
            fontSize={fonts.SWITCH_LABEL}
          />
          <CustomSwitch
            mt
            mb
            mr
            ml
            text={i18n.t('switchLabels.numbers')}
            fontSize={fonts.SWITCH_LABEL}
          />
        </Card>
        <Card flex={2} color={colors.CARD_SECONDARY} mt mb ml={3} mr={3} />
        <Card flex={2} color={colors.CARD_SECONDARY} mt mb ml={3} mr={3} />
        <Card flex={1} color={colors.CARD_SECONDARY} mt mb={2} ml={3} mr={3} />
      </CustomView>
    </Content>
  </Container>
);

export default Home;
