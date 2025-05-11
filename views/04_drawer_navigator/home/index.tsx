import {View, Text} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../../App.tsx';
import {Button} from '@react-navigation/elements';

// 为当前页面导航对象，添加类型注解
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const HomeScreen = ({navigation}: Props) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button onPress={() => navigation.navigate('Profile')}>go to Profile</Button>
        </View>
    );
};
export default HomeScreen;
