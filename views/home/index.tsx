import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = () => {
    // flex:1垂直方向的flex布局
    return (
        <View style={styles.container}>
            <Text>内容区域</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;
