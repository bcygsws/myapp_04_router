import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './home';
import ProfileScreen from './profile';
import {RootStackParamList} from '../../App';
import Ionicons from 'react-native-vector-icons/Ionicons';

// 参考文档：https://blog.csdn.net/weixin_50406024/article/details/147480501

const Drawer = createDrawerNavigator<RootStackParamList>();
const MyDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={({route}) => ({
                drawerStyle: {// 特别注意：0.6版本，drawStyle直接卸载Navigator下
                    // backgroundColor: 'green',// 抽屉背景颜色
                    width: 200,// 抽屉宽度
                },
                drawerContentStyle: {// 单独设置抽屉内容区样式,也可以在drawerStyle中设置
                    // backgroundColor: 'orange',
                },
                drawerPosition: 'right',// 抽屉位置,默认值为left
                drawerType: 'slide',// 抽屉类型，permanent表示永久的，slide表示滑动的
                drawerActiveTintColor: 'red',// 抽屉激活状态的文字颜色
                drawerInactiveTintColor: 'black',// 抽屉默认状态的文字颜色
                drawerItemStyle: { // 设置菜单项的样式
                    // marginVertical: 20,
                },
                drawerIcon: ({focused, size, color}) => {// 为抽屉中每个选项单独设置（选中和非选中）状态下的图标
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }
                    return (<Ionicons name={iconName as string} size={size} color={color}/>);
                },
            })}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: '首页',
                    drawerIcon: ({focused, size, color}) => {
                        let iconName;
                        iconName = focused ? 'home' : 'home-outline';
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: '详情',
                }}
            />
        </Drawer.Navigator>
    );
}
export default MyDrawer;
