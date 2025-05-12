import {View, Text, StyleSheet} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../../../App.tsx';
import {Button} from '@react-navigation/elements';
import {DrawerActions} from "@react-navigation/native";

// 为当前页面导航对象，添加类型注解
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const HomeScreen = ({navigation}: Props) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button onPress={() => navigation.navigate('Profile')}>go to Profile</Button>
            {/*react navigation 5.x写法，直接navigation.openDrawer(),7.x版本中已经弃用*/}
            {/*<Button onPress={() => navigation?.openDrawer()}>open Drawer</Button>*/}
            {/*7.x版本写法：使用dispatch()方法，类似redux中的dispatch()方法*/}
            <Button onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>open Drawer</Button>
            <Button onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>toggle Drawer</Button>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
});
export default HomeScreen;
