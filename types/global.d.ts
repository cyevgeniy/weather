// Use weatherapi.com instead openweathermap, because the last one sucks
export interface Location {
  name: string
  region: string
  country: string
  lat: number
  lon: number
  tz_id: string
  localtime_epoch: number
  localtime: string
}

export interface Condition {
  text: string
  icon: string
  code: number
}

export interface CurrentWeatherInfo {
  last_updated_epoch: number
  last_updated: string
  temp_c: number
  temp_f: number
  is_day: number // 0-1
  condition: Condition
  wind_mph: number
  wind_kph: number
  wind_degree: number
  wind_dir: string
  pressure_mb: number
  pressure_in: number
  precip_mm: number
  precip_in: number
  humidity: number
  cloud: number
  feelslike_c: number
  feelslike_f: number
  vis_km: number
  vis_miles: number
  uv: number
  gust_mph: number
  gust_kph: number
}

export interface ForecastDayInfo {
  date: string
  day: {
    avgtemp_c: number
    condition: Condition
    maxwind_kph: number
    avghumidity: number
    feelslike_c: number
  }
}

export interface Forecast {
  forecastday: ForecastDayInfo[]
}

export interface Weather {
  location: Location
  current: CurrentWeatherInfo
  forecast: Forecast
}

// "last_updated_epoch": 1708385400,
//     "last_updated": "2024-02-20 02:30",
//     "temp_c": -0.5,
//     "temp_f": 31.1,
//     "is_day": 0,
//     "condition": {
//       "text": "Moderate snow",
//       "icon": "//cdn.weatherapi.com/weather/64x64/night/332.png",
//       "code": 1219
//     },
//     "wind_mph": 16.6,
//     "wind_kph": 26.6,
//     "wind_degree": 157,
//     "wind_dir": "SSE",
//     "pressure_mb": 1020,
//     "pressure_in": 30.12,
//     "precip_mm": 0.08,
//     "precip_in": 0,
//     "humidity": 58,
//     "cloud": 100,
//     "feelslike_c": -6.8,
//     "feelslike_f": 19.9,
//     "vis_km": 5,
//     "vis_miles": 3,
//     "uv": 1,
//     "gust_mph": 23.2,
//     "gust_kph": 37.3
