import React, { ReactElement } from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../theme/colors';

interface ContainerProps {
  children?: Array<ReactElement> | ReactElement;
}

const StyledContainer = styled(SafeAreaView)`
  flex: 1;
`;

const Container = ({ children, ...props }: ContainerProps): ReactElement => (
  <LinearGradient colors={colors.GRADIENT} style={{ flex: 1 }}>
    <StyledContainer {...props}>
      {children}
    </StyledContainer>
  </LinearGradient>
);

export default Container;
