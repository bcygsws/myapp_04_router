import {View, Text, Button} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../../App.tsx';

// 为当前页面添加类型注解
type Props = NativeStackScreenProps<RootStackParamList, 'About'>;

const AboutScreen = ({navigation}: Props) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>About Screen</Text>
            <Button title={'to home'} onPress={() => navigation.navigate('Home')}/>
        </View>
    );
};
export default AboutScreen;
