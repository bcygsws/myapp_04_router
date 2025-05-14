import {View, Text, StyleSheet} from "react-native";

const FirstScreen = () => {
    return (
        <View style={styles.container}>
            <Text>First</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default FirstScreen;
