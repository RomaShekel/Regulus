import axios from "axios"

export default async function getWeather(lat:number, lon:number) {

try {
    const response = await axios.get('http://api.weatherapi.com/v1/current.json',
        {
            params:{
                q:`${lat},${lon}`,
                lang: 'uk',
                key:import.meta.env.VITE_weather_key

            }
        }
    )
    return response.data
} catch (e) {
    console.log(e)
}
}