import {View, Text, StyleSheet} from "react-native";
import {RouteProp} from "@react-navigation/native";
import {RootStackParamList} from "../../../App.tsx";

type AboutScreenProps = RouteProp<RootStackParamList, 'About'>;
const AboutScreen = ({route}: { route: AboutScreenProps }) => {
    return (
        <View style={styles.container}>
            <Text>About Screen</Text>
            <Text>{route.params?.key}</Text>
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
