import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';

interface LabelProps {
  text?: string;
  color?: string;
}

const StyledText = styled(Text)`
  ${({ color }: LabelProps): string => `color: ${color}`};
`;

const Label = ({ text, ...props }: LabelProps): ReactElement => (
  <StyledText {...props}>{text}</StyledText>
);

export default Label;
