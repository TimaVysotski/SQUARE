import React, { ReactElement } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import colors from '../../../theme/colors';
import sizes from '../../../theme/sizes';

interface LabelProps {
  text?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: string;
  letterSpasing?: number;
  mt?: number | boolean;
  mb?: number | boolean;
  mr?: number | boolean;
  ml?: number | boolean;
}

const StyledText = styled(Text)`
  color: ${({ color = colors.LABEL_PRIMARY }: LabelProps): string => color};
  font-size: ${({ fontSize = 0 }: LabelProps): number => fontSize};
  font-weight: ${({ fontWeight = 'bold' }: LabelProps): string => fontWeight};
  margin-top: ${({ mt = 0 }: LabelProps): number => Number(mt) * sizes.baseMargin};
  margin-bottom: ${({ mb = 0 }: LabelProps): number => Number(mb) * sizes.baseMargin};
  margin-right: ${({ mr = 0 }: LabelProps): number => Number(mr) * sizes.baseMargin};
  margin-left: ${({ ml = 0 }: LabelProps): number => Number(ml) * sizes.baseMargin};
`;

const Label = ({ text, ...props }: LabelProps): ReactElement => (
  <StyledText {...props}>{text}</StyledText>
);

export default Label;
