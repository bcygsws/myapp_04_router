import {View, Text, StyleSheet} from "react-native";
import {Button} from "@react-navigation/elements";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "../../../App.tsx";

type NavProps = NavigationProp<RootStackParamList>;
const HomeScreen = () => {
    const navigation = useNavigation<NavProps>();
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button onPress={() => {
                navigation.navigate('About',
                    {key: '123'})
            }}>go to About</Button>
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
