/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    Dimensions,
    ScrollView,
    StatusBar,
    StyleSheet,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from './views/02_native_stack_navigator/home';
// import AboutScreen from './views/02_native_stack_navigator/about';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './views/03_bottom_tab_navigator/home';
import AboutScreen from './views/03_bottom_tab_navigator/about';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyDrawer from './views/04_drawer_navigator/index';
import {createDrawerNavigator} from "@react-navigation/drawer";

// RootStackParamList 是你定义整个导航栈页面名称和参数类型的接口
export type RootStackParamList = {
    Home: undefined;// undefined表示这个页面不需要传递参数
    About: undefined;// 同上
    // About: { id: string};// 需要传递一个string类型的id参数
    // 其他页面...
    Profile: undefined;
};

function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    /*
     * To keep the template simple and small we're adding padding to prevent view
     * from rendering under the System UI.
     * For bigger apps the recommendation is to use `react-native-safe-area-context`:
     * https://github.com/AppAndFlow/react-native-safe-area-context
     *
     * You can read more about it here:
     * https://github.com/react-native-community/discussions-and-proposals/discussions/827
     */
    const safePadding = '5%';

    return (
        <NavigationContainer>
            {/*在典型的应用中NavigationContainer组件一般在根目录中使用一次，不应该嵌套使用它*/}
            <View style={backgroundStyle}>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}
                />
                <ScrollView
                    style={backgroundStyle}>
                    <View
                        style={{
                            backgroundColor: isDarkMode ? Colors.black : Colors.white,
                            // paddingHorizontal: safePadding,
                            // paddingBottom: safePadding,
                        }}>
                        {/*02 native stack navigator 原生堆栈导航*/}
                        {/*<View*/}
                        {/*    style={{*/}
                        {/*        backgroundColor: '#666',*/}
                        {/*        width: '100%',*/}
                        {/*        height: Dimensions.get('window').height - 45*/}
                        {/*    }}>*/}
                        {/*    /!*导航容器，作用于整个应用；*!/*/}
                        {/*    /!*stack options属性：initialRouteName默认路由；*/}
                        {/*    headerMode:值为float，表示ios头部效果；值为screen,表示android头部效果;值为none,不显示头部*!/*/}
                        {/*    <Stack.Navigator initialRouteName={'Home'}>*/}
                        {/*        /!*导航屏幕，name属性是导航名称；作用于当前屏幕；screen options属性如下：*!/*/}
                        {/*        <Stack.Screen name="Home" component={HomeScreen} options={{*/}
                        {/*            title: '首页',*/}
                        {/*            headerTitleAlign: 'center',*/}
                        {/*            headerStyle: {*/}
                        {/*                backgroundColor: 'pink',*/}
                        {/*            },*/}
                        {/*            headerTitleStyle: {*/}
                        {/*                fontWeight: 'bold',*/}
                        {/*                color: 'blue',*/}
                        {/*            },*/}
                        {/*        }}/>*/}
                        {/*        <Stack.Screen name="About" component={AboutScreen} options={{*/}
                        {/*            title: '我的关于',*/}
                        {/*            headerTitleAlign: 'center',*/}
                        {/*            headerStyle: {*/}
                        {/*                backgroundColor: 'pink',*/}
                        {/*            },*/}
                        {/*            headerTitleStyle: {*/}
                        {/*                fontWeight: 'bold',*/}
                        {/*                color: 'blue',*/}
                        {/*            },*/}
                        {/*        }}/>*/}
                        {/*    </Stack.Navigator>*/}
                        {/*</View>*/}

                        {/*03 bottom tab navigator 底部选项卡导航*/}
                        {/*<View style={{width: '100%', height: Dimensions.get('window').height - 25}}>*/}
                        {/*    <Tab.Navigator screenOptions={*/}
                        {/*        ({route}) => ({*/}
                        {/*            tabBarIcon: ({focused, color, size}) => {*/}
                        {/*                let iconName;*/}
                        {/*                if (route.name === 'Home') {*/}
                        {/*                    iconName = focused ? 'add-circle' : 'add-circle-outline';*/}
                        {/*                } else if (route.name === 'About') {*/}
                        {/*                    iconName = focused ? 'person' : 'person-outline';*/}
                        {/*                }*/}
                        {/*                return <Ionicons name={iconName as string} size={size} color={color}/>;*/}
                        {/*            }*/}
                        {/*        })}>*/}
                        {/*        <Tab.Screen name={'Home'} component={HomeScreen}/>*/}
                        {/*        <Tab.Screen name={'About'} component={AboutScreen}/>*/}
                        {/*    </Tab.Navigator>*/}

                        {/*</View>*/}

                        {/*Drawer Navigator导航*/}
                        <View>
                            <MyDrawer/>
                        </View>

                    </View>
                </ScrollView>
            </View>
        </NavigationContainer>
    )
        ;
}

// 2.创建原生堆栈导航器
// const Stack = createNativeStackNavigator<RootStackParamList>();
// 3.创建底部选项卡导航器
// const Tab = createBottomTabNavigator<RootStackParamList>();

const styles = StyleSheet.create({});

export default App;
