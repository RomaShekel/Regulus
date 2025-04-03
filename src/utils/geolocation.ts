import getWeather from "./weather.ts"

export default function getGeolocation() {

    navigator.geolocation.getCurrentPosition(async (position) => { 
        const weather = await getWeather(position.coords.latitude, position.coords.longitude)
        console.log(weather)

    })


    if ('geolocation' in navigator) {
        // const weather = getWeather()
        } else {
        console.log('Wep')
        }
        
}