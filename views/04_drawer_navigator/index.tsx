import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './home';
import ProfileScreen from './profile';
import {RootStackParamList} from '../../App';

// 参考文档：https://blog.csdn.net/weixin_50406024/article/details/147480501

const Drawer = createDrawerNavigator<RootStackParamList>();
const MyDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
            />
            <Drawer.Screen
                name="Profile"
                component={ProfileScreen}
            />
        </Drawer.Navigator>
    );
}
export default MyDrawer;
