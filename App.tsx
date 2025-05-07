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
import Home from "./views/home";
import About from "./views/about";

// RootStackParamList 是你定义整个导航栈页面名称和参数类型的接口
export type RootStackParamList = {
    Home: undefined;
    About: undefined;
    // 其他页面...
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
                            paddingHorizontal: safePadding,
                            paddingBottom: safePadding,
                        }}>
                        <View
                            style={{
                                backgroundColor: '#666',
                                width: '100%',
                                height: Dimensions.get('window').height - 45
                            }}>
                            <Stack.Navigator initialRouteName={'Home'}>
                                <Stack.Screen name="Home" component={Home} options={{
                                    title: '首页',
                                    headerTitleAlign: 'center',
                                    headerStyle: {
                                        backgroundColor: 'pink',
                                    },
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                        color: 'blue',
                                    },
                                }}/>
                                <Stack.Screen name="About" component={About} options={{
                                    title: '关于',
                                    headerTitleAlign: 'center',
                                    headerStyle: {
                                        backgroundColor: 'pink',
                                    },
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                        color: 'blue',
                                    },
                                }}/>
                            </Stack.Navigator>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </NavigationContainer>
    );
}

// 创建原生堆栈导航器
const Stack = createNativeStackNavigator<RootStackParamList>();

const styles = StyleSheet.create({});

export default App;
