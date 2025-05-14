import {RootStackParamList} from "../../App.tsx";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AboutScreen from "./about";
import HomeScreen from "./home";

const Stack = createNativeStackNavigator<RootStackParamList>();
const PassParams = () => {
    return (<Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name={'Home'} component={HomeScreen}/>
        <Stack.Screen name={'About'} component={AboutScreen}/>
    </Stack.Navigator>)
}
export default PassParams;
