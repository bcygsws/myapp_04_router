import {$http} from "../utils/index.tsx";

/**
 * @Desc；天气相关API
 *
 *
 * */
export interface IGetWeather {
    location: string | number;
}

/**
 * @Desc：和风天气，获取未来三天天气情况
 * @param {IGetWeather} params
 * location: 地理坐标（区域代码或者经纬度）
 *
 * */
const weather3dAPI = (params: IGetWeather) => {
    const {location} = params;
    return $http.request({
        method: 'GET',
        url: 'v7/weather/3d',
        params: {
            location,
        },
    })
}
export {
    weather3dAPI,
}
