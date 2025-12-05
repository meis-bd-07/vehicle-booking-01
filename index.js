import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import MainIndex from '@main';
import '@assets/ts/ignoreWarnings';

AppRegistry.registerComponent(appName, () => MainIndex);
