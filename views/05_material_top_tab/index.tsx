import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {RootStackParamList} from '../../App.tsx';
import HomeScreen from './home';
import AboutScreen from "./about";
import ProfileScreen from "./profile";
import Ionicons from "react-native-vector-icons/Ionicons";

const MTab = createMaterialTopTabNavigator<RootStackParamList>();
const MyMaterialTopTab = () => {
    return (
        <MTab.Navigator initialRouteName={'Home'}
                        tabBarPosition={'bottom'}
                        screenOptions={({route}) => ({
                            tabBarStyle: {
                                borderColor: 'red',
                                borderWidth: 1,
                            },
                            tabBarActiveTintColor: '#f4511e',
                            tabBarInactiveTintColor: '#333',
                            tabBarLabelStyle: {
                                fontSize: 16,
                            },
                            tabBarIcon: ({focused, color}) => {
                                let iconName: string;
                                if (route.name === 'Home') {
                                    iconName = focused ? 'add-circle' : 'add-circle-outline';
                                } else if (route.name === 'About') {
                                    iconName = focused ? 'arrow-redo' : 'arrow-redo-outline';
                                } else if (route.name === 'Profile') {
                                    iconName = focused ? 'walk' : 'walk-outline';
                                }
                                return <Ionicons name={iconName!} size={20} color={color}/>;
                            }
                        })}>
            <MTab.Screen name="Home" component={HomeScreen} options={{title: '待付款'}}/>
            <MTab.Screen name="About" component={AboutScreen} options={{title: '待发货'}}/>
            <MTab.Screen name="Profile" component={ProfileScreen} options={{title: '待收货'}}/>
        </MTab.Navigator>
    );
};
export default MyMaterialTopTab;
