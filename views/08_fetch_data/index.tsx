import {View, Text, StyleSheet, Button} from "react-native";
import {IGetWeather, weather3dAPI} from "../../apis/weather.tsx";
import {useEffect} from "react";
import {API_KEY} from "../../utils/constant.tsx";

const FetchData = () => {
    useEffect(() => {
        // const fetchData = async (params: IGetWeather) => {
        //     // 参数是一个对象location可以是区域代码或者经纬度：location：101010100 或 location：116.41,39.92
        //     try {
        //         const res = await weather3dAPI(params);
        //         console.log("res===", res);
        //     } catch (e) {
        //         console.log("e===", e);
        //     }
        //
        // }

        function fetchData(params: IGetWeather) {
            const {location} = params;
            fetch(`https://n63p3xwu98.re.qweatherapi.com/v7/weather/3d?location=${location}`,
                {
                    method: 'GET',
                    headers: {
                        'X-QW-Api-Key': API_KEY,
                        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                        'Content-Type': 'application/json',
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/',
                        'Access-Control-Allow-Origin': '*', // 允许跨域

                    },
                    mode: 'cors',
                },
            ).then(response => response.json()).then(res => {
                console.log("res===", res);
            }).catch(err => {
                console.log("err===", err);
            });
        }

        fetchData({location: '101010100'});
    }, []);
    // const fetchData = async (params: IGetWeather) => {
    //     // 参数是一个对象location可以是区域代码或者经纬度：location：101010100 或 location：116.41,39.92
    //     try {
    //         const res = await weather3dAPI(params);
    //         console.log("res===", res);
    //     } catch (e) {
    //         console.log("e===", e);
    //     }
    //
    // }

    // const fetchData = async (params: IGetWeather) => {
    //     try {
    //         const {location} = params;
    //         const res = await fetch(`https://n63p3xwu98.re.qweatherapi.com/v7/weather/3d?location=${location}`,
    //             {
    //                 method: 'GET',
    //                 headers: {
    //                     'X-QW-Api-Key': 'b88d0a14a2034fe2a3abf4c6c7f1af85',
    //                 },
    //             },
    //         );
    //         const result = await res.json();
    //         console.log("result===", result);
    //     } catch (err) {
    //         console.log("err===", err);
    //     }
    //
    // }
    return (
        <View style={styles.container}>
            <Text>FetchData</Text>
            <Button title={'点击请求数据'} onPress={() => {
            }}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default FetchData;
