import {View, Text, StyleSheet} from 'react-native';
// import type {NativeStackScreenProps} from '@react-navigation/native-stack';
// import type {RootStackParamList} from '../../../App.tsx';
// import {Button} from '@react-navigation/elements';

// 为当前页面添加类型注解
// type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const HomeScreen = () => {
    return (<View style={styles.container}>
        <Text>Home</Text>
    </View>);
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default HomeScreen;
