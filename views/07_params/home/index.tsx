import {View, Text, StyleSheet} from "react-native";
import {Button} from "@react-navigation/elements";
import {NavigationProp, RouteProp, useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "../../../App.tsx";

type NavProps = NavigationProp<RootStackParamList>;
type HomeScreenProps = RouteProp<RootStackParamList, 'Home'>;
const HomeScreen = ({route}: { route: HomeScreenProps }) => {
    const navigation = useNavigation<NavProps>();
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button onPress={() => {
                navigation.navigate('About',
                    {key: Math.floor(Math.random() * 100)})
            }}>go to About</Button>
            <Text>{route.params?.post}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default HomeScreen;
