import axios from "axios"
import getGeolocation from "./getGeolocation.ts"

export async function weatherRequest(lat:number, lon:number): Promise<WeatherResponse | undefined> {

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

export default async function getWeather(): Promise<WeatherResponse | undefined> {
  const coords = await getGeolocation()
  const weather = await weatherRequest(coords.lat, coords.lon)
  return weather
}

export interface WeatherResponse {
  location: Location;
  current: Current;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
  air_quality: AirQuality;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface AirQuality {
  co: number;
  no2: number;
  o3: number;
  so2: number;
  pm2_5: number;
  pm10: number;
  "us-epa-index": number;
  "gb-defra-index": number;
}