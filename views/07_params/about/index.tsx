import {View, Text, StyleSheet} from "react-native";
import {NavigationProp, RouteProp, useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "../../../App.tsx";
import {Button} from "@react-navigation/elements";

type AboutScreenProps = RouteProp<RootStackParamList, 'About'>;
// type Props = NativeStackScreenProps<RootStackParamList, 'About'>;
type NavProp = NavigationProp<RootStackParamList>;
const AboutScreen = ({route}: { route: AboutScreenProps }) => {
    const navigation = useNavigation<NavProp>();
    return (
        <View style={styles.container}>
            <Text>About Screen</Text>
            <Text>{route.params?.key}</Text>
            <Button onPress={() => {
                navigation.navigate('Home', {post: 'About组件传参'})
            }}>go to Home </Button>
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
export default AboutScreen;
