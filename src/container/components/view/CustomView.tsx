import React, { ReactElement } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import sizes from '../../../theme/sizes';
import colors from '../../../theme/colors';

interface CustomViewProps {
  children?: Array<ReactElement> | ReactElement;
  flexDirection?: string;
  borderRadius?: number | string;
  alignItems?: string;
  shadow?: string;
  flex?: number | boolean;
  color?: string;
  mt?: number | boolean;
  mb?: number | boolean;
  mr?: number | boolean;
  ml?: number | boolean;
}

const StyledCustomView = styled(View)`
  justify-content: center;
  elevation: 5;
  flex: ${({ flex = 1 }: CustomViewProps): number => Number(flex)};
  box-shadow: ${({ shadow = colors.SHADOW_DEFAULT }: CustomViewProps): string => shadow};
  ${({ flexDirection }: CustomViewProps): string => `flex-direction: ${flexDirection}`};
  ${({ alignItems }: CustomViewProps): string => `align-items: ${alignItems}`};
  ${({ borderRadius }: CustomViewProps): string => `border-radius: ${borderRadius}`};
  ${({ color }: CustomViewProps): string => `backgroundColor: ${color}`};
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
