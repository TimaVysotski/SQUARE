import React, { ReactElement } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import sizes from '../../../theme/sizes';

interface CustomViewProps {
  children?: Array<ReactElement> | ReactElement;
  flex?: number | boolean;
  color?: string;
  mt?: number | boolean;
  mb?: number | boolean;
  mr?: number | boolean;
  ml?: number | boolean;
}

const StyledCustomView = styled(View)`
  flex: ${({ flex = 1 }: CustomViewProps): number => Number(flex)};
  ${({ color }: CustomViewProps): string => `backgroundColor: ${color}`}
  margin-top: ${({ mt = 0 }: CustomViewProps): number => Number(mt) * sizes.baseMargin};
  margin-bottom: ${({ mb = 0 }: CustomViewProps): number => Number(mb) * sizes.baseMargin};
  margin-right: ${({ mr = 0 }: CustomViewProps): number => Number(mr) * sizes.baseMargin};
  margin-left: ${({ ml = 0 }: CustomViewProps): number => Number(ml) * sizes.baseMargin};
`;

const CustomView = ({ children, ...props }: CustomViewProps): ReactElement => (
  <StyledCustomView {...props}>
    {children}
  </StyledCustomView>
);

export default CustomView;
