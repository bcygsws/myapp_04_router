import {View, StyleSheet, Dimensions} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RootStackParamList} from "../../../App.tsx";
import FirstScreen from "./first";
import SecondScreen from "./second";
import Ionicons from "react-native-vector-icons/Ionicons";
import {HEADER_HEIGHT, STATUS_BAR_HEIGHT, WINDOW_HEIGHT} from "../../../utils/height.tsx";

const Tab = createBottomTabNavigator<RootStackParamList>();
const HomeScreen = () => {
    return (<View style={styles.homeContainer}>
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName: string;
                    if (route.name === 'First') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    } else if (route.name === 'Second') {
                        iconName = focused ? 'filter-circle' : 'filter-circle-outline';
                    }
                    return <Ionicons name={iconName!} size={size} color={color}/>;
                },
                // headerShown: true,// 控制头部是否显示;默认值是true
                headerShown: false,// 控制头部是否显示;默认值是true
                tabBarStyle: {
                    height: 50,
                    backgroundColor: '#fff',
                    borderTopWidth: 0,
                },
            })}>
            <Tab.Screen name={'First'} component={FirstScreen}/>
            <Tab.Screen name={'Second'}  component={SecondScreen}/>
        </Tab.Navigator>
    </View>);
};
const styles = StyleSheet.create({
    homeContainer: {
        width: '100%',
        minHeight: (WINDOW_HEIGHT + STATUS_BAR_HEIGHT) - 50 - HEADER_HEIGHT,
    },
});
export default HomeScreen;
