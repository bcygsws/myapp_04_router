import {View, Text, StyleSheet} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../../App.tsx';
import {Button} from '@react-navigation/elements';

// 为当前页面添加类型注解
type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;
const ProfileScreen = ({navigation}: Props) => {
    return (
        <View style={styles.container}>
            <Text>About Screen</Text>
            <Button onPress={() => navigation.navigate('Home')}>go to Home</Button>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});
export default ProfileScreen;
