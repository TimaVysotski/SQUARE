import React, { ReactElement } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import sizes from '../../../theme/sizes';

interface CardProps {
  children?: Array<ReactElement> | ReactElement;
  flex?: number | boolean;
  color?: string;
  mt?: number | boolean;
  mb?: number | boolean;
  mr?: number | boolean;
  ml?: number | boolean;
}

const StyledCard = styled(View)`
  flex: ${({ flex = 1 }: CardProps): number => Number(flex)};
  ${({ color }: CardProps): string => `backgroundColor: ${color}`}
  border-radius: ${sizes.baseBorderRadius};
  opacity: 0.8;
  margin-top: ${({ mt = 0 }: CardProps): number => Number(mt) * sizes.baseMargin};
  margin-bottom: ${({ mb = 0 }: CardProps): number => Number(mb) * sizes.baseMargin};
  margin-right: ${({ mr = 0 }: CardProps): number => Number(mr) * sizes.baseMargin};
  margin-left: ${({ ml = 0 }: CardProps): number => Number(ml) * sizes.baseMargin};
`;

const Card = ({ children, ...props }: CardProps): ReactElement => (
  <StyledCard {...props}>
    {children}
  </StyledCard>
);

export default Card;
