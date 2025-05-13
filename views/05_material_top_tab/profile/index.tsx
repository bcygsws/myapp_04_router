import {View, Text, StyleSheet} from 'react-native';
// import type {NativeStackScreenProps} from '@react-navigation/native-stack';
// import type {RootStackParamList} from '../../../App.tsx';

// 为当前页面添加类型注解
// type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;
const ProfileScreen = () => {
    return (<View style={styles.container}>
        <Text>profile</Text>
    </View>);
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default ProfileScreen;
