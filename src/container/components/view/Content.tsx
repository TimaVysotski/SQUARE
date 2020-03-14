import styled from 'styled-components';
import { View } from 'react-native';
import React, { ReactElement } from 'react';

interface ContentProps {
  children?: Array<ReactElement> | ReactElement;
  flex?: number | boolean;
  color?: string;
}

const StyledContent = styled(View)`
  flex: ${({ flex = 1 }: ContentProps): number => Number(flex)};
`;

const Content = ({ children, ...props }: ContentProps): ReactElement => (
  <StyledContent {...props}>
    {children}
  </StyledContent>
);

export default Content;
