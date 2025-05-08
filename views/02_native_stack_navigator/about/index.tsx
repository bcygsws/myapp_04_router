import {Button} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../../App.tsx'; // 假设你的导航栈类型在此文件中定义

// 为当前页面添加类型注解
type Props = NativeStackScreenProps<RootStackParamList, 'About'>;


const AboutScreen = ({navigation}: Props) => {
    return (
        <Button title={'跳转到主页'} onPress={() => navigation.navigate('Home')}/>
    );
};
export default AboutScreen;
