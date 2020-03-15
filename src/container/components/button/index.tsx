import React, { ReactElement } from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import colors from '../../../theme/colors';
import sizes from '../../../theme/sizes';
import Label from '../text/Label';

interface ButtonProps {
  children?: Array<ReactElement> | ReactElement;
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
  backgroundColor: ${colors.CARD_PRIMARY};
  border-radius: ${sizes.baseBorderRadius};
`;

const Button = ({ text, color, fontSize, ...props }: ButtonProps): ReactElement => (
  <StyledTouchableOpacity {...props}>
    <Label text={text} color={color} fontSize={fontSize} />
  </StyledTouchableOpacity>
);

export default Button;
