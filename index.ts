import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import MainIndex from '@main';
import "./global.css"

AppRegistry.registerComponent(appName, () => MainIndex);
