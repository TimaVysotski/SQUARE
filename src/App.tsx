import { Root } from 'native-base';
import React, { ReactElement } from 'react';
import AppNavigator from './navigation';
import stores, { StoreProvider } from './store';

const App = (): ReactElement => (
  <StoreProvider value={stores}>
    <Root>
      <AppNavigator />
    </Root>
  </StoreProvider>
);

export default App;
