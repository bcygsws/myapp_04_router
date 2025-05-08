import {StyleSheet, Button} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../../App.tsx'; // 假设你的导航栈类型在此文件中定义

// 为当前页面添加类型注解
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const HomeScreen = ({navigation}: Props) => {
    return (
        <Button onPress={() => navigation.navigate('About')} title={'跳转到关于页面'}/>
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
