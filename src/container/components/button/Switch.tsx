import React, { ReactElement } from 'react';
import { View, Switch } from 'react-native';
import styled from 'styled-components';
import Label from '../text/Label';
import CustomView from '../view/CustomView';
import sizes from '../../../theme/sizes';
import colors from '../../../theme/colors';

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

const StyledSwitch = styled(Switch)`
  align-self: flex-end;
`;

const CustomSwitch = ({ fontSize, text, ...props }: SwitchProps): ReactElement => (
  <CustomView
    mt
    mb
    ml={3}
    mr={3}
    color={colors.CARD_PRIMARY}
    borderRadius={sizes.baseBorderRadius}
  >
    <StyledSwitchView {...props}>
      <CustomView
        ml
        mr
        flex={4}
      >
        <Label
          text={text}
          fontSize={fontSize}
          color={colors.LABEL_SECONDARY}
        />
      </CustomView>
      <CustomView
        ml
        mr
        flex={2}
      >
        <StyledSwitch />
      </CustomView>
    </StyledSwitchView>
  </CustomView>
);

export default CustomSwitch;
