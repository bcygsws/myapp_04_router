/**
 * @format
 */

//0.7版本,下面的屏幕手势语句不用添加了
//import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
