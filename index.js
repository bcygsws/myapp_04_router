import 'react-native-gesture-handler';// 0.7+版本，drawer导航，用到手势，需要添加上这个配置，且需要放在入口文件的最顶部
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
