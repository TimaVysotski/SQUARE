import { ReactElement } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import sizes from '../../../theme/sizes';

interface SwitchProps {
  children?: Array<ReactElement> | ReactElement;
  fontSize?: number;
  color?: string;
  flex?: number | boolean;
  text?: string;
  mt?: number | boolean;
  mb?: number | boolean;
  mr?: number | boolean;
  ml?: number | boolean;
}

const StyledSwitchView = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  alignContent: center;
  flex: ${({ flex = 1 }: SwitchProps): number => Number(flex)};
  ${({ color }: SwitchProps): string => `backgroundColor: ${color}`}
  margin-top: ${({ mt = 0 }: SwitchProps): number => Number(mt) * sizes.baseMargin};
  margin-bottom: ${({ mb = 0 }: SwitchProps): number => Number(mb) * sizes.baseMargin};
  margin-right: ${({ mr = 0 }: SwitchProps): number => Number(mr) * sizes.baseMargin};
  margin-left: ${({ ml = 0 }: SwitchProps): number => Number(ml) * sizes.baseMargin};
`;

export default StyledSwitchView;
