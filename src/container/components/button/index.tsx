import React, { ReactElement } from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import sizes from '../../../theme/sizes';
import Label from '../text/Label';

interface ButtonProps {
  children?: Array<ReactElement> | ReactElement;
  buttonColor?: string;
  onPress?: (event: GestureResponderEvent) => void;
  fontSize?: number;
  color?: string;
  text?: string;
}

const StyledTouchableOpacity = styled(TouchableOpacity)`
  flex: 1;
  width: 100;
  justify-content: center;
  align-items: center;
  align-self: center;
  ${({ buttonColor }: ButtonProps): string => `backgroundColor: ${buttonColor}`};
  border-radius: ${sizes.baseBorderRadius};
`;

const StyledRowTouchableOpacity = styled(TouchableOpacity)`
  width: 100;
  justify-content: center;
  align-items: center;
  ${({ buttonColor }: ButtonProps): string => `backgroundColor: ${buttonColor}`};
  border-radius: ${sizes.baseBorderRadius};
  margin-right: ${sizes.baseMargin};
  margin-left: ${sizes.baseMargin};
`;

const Button = ({ text, color, fontSize, onPress, ...props }: ButtonProps): ReactElement => (
  <StyledTouchableOpacity onPress={onPress} {...props}>
    <Label text={text} color={color} fontSize={fontSize} />
  </StyledTouchableOpacity>
);

export const RowBotton = ({ text, color, fontSize, onPress, ...props }: ButtonProps): ReactElement => (
  <StyledRowTouchableOpacity onPress={onPress} {...props}>
    <Label text={text} color={color} fontSize={fontSize} />
  </StyledRowTouchableOpacity>
);

export default Button;
