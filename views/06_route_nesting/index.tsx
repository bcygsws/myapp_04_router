import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../App.tsx";
import ProfileScreen from "./profile";
import AboutScreen from "./about";
import HomeScreen from "./home";

const Stack = createNativeStackNavigator<RootStackParamList>();
const RouteNesting = () => {
    return (<Stack.Navigator initialRouteName={'Home'}
                             screenOptions={{
                                 headerShown: true,
                             }}>
            <Stack.Screen name={'Home'} component={HomeScreen} options={{
                title: '首页',
                // header节点返回一个函数组件，重写默认的header
                // header: ()=>(<View style={{height: 56, backgroundColor: 'red'}}><Text>fdsafsd</Text></View>),
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: 'green',
                },
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'pink',
                },
            }}/>
            <Stack.Screen name={'About'} component={AboutScreen}/>
            <Stack.Screen name={'Profile'} component={ProfileScreen}/>
        </Stack.Navigator>
    )
}
export default RouteNesting;
/**
 * @Desc:一、RN中各种状态栏的高度
 * 1.StatusBar的高度
 * 参考文档：https://blog.51cto.com/u_16213304/12042117
 * 安装包：react-native-status-bar-height
 *
 * 参考文档2：https://cloud.tencent.com/developer/ask/sof/67446
 *
 * 2.TabBar的高度
 *  tabBarStyle可以自定义
 *
 * 3.Header的高度
 * 参考文档：https://blog.csdn.net/xuelian3015/article/details/143277368
 *
 * 二、路由嵌套
 *
 * 三、路由传参
 *
 * 3.1 传递参数
 * 传递参数
 * navigation.navigate('Profile', {
 *   KEY: 123
 * });
 *
 * 3.2 接收参数
 * 类组件
 * this.props.route.params.KEY
 *
 * 函数式组件
 * 解构出route
 * route.params.KEY，获取参数
 *
 *
 * */
