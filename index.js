import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';

// eslint-disable-next-line no-console
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
