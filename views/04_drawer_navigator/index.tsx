import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './home';
import ProfileScreen from './profile';
import {RootStackParamList} from '../../App';
import {Button, Text, View} from 'react-native';

// 参考文档：https://blog.csdn.net/weixin_50406024/article/details/147480501

const Drawer = createDrawerNavigator<RootStackParamList>();
const MyDrawer = ()=>{
    return(
        <Drawer.Navigator
            initialRouteName="Home" // 设置初始路由
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#c6cbef', // 抽屉背景颜色
                    width: 240, // 抽屉宽度
                },
                drawerActiveTintColor: '#fff', // 激活状态文字颜色
                drawerInactiveTintColor: '#333', // 非激活状态文字颜色
            }}
            drawerContent={(props) => {
                return (
                    <View style={{ flex: 1, paddingTop: 50 }}>
                        <Text style={{ fontSize: 20, padding: 20 }}>Custom Drawer Content</Text>
                        <Button title="Close Drawer" onPress={() => props.navigation.closeDrawer()} />
                    </View>
                );
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: '主页' }} // 自定义标题
            />
            <Drawer.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title: '详情页' }}
            />
        </Drawer.Navigator>
    );
}
export default MyDrawer;
