import type { Weather } from '~/types/global'

interface SearchParams {
  limit: number
  lang: 'ru' | 'en'
}

// Since everything is client-side, don't use pinia
export function useWeather() {
  const qry = ref('')

  const weather = ref<Weather | undefined>()

  // Forcast data for next limit - 1 days.
  // We exclude the first item because we use 'current' field to display weather info for it
  const forecast = computed(() => weather.value?.forecast.forecastday.slice(1) ?? [])
  const loading = ref(false)

  // Weatherapi returns error objects only in English, so
  // use local flag and display handwritten error message in Russian
  const error = ref(false)

  const config = useRuntimeConfig()

  async function searchWeather(searchParams: SearchParams = { limit: 4, lang: 'ru' }) {
    if (!qry.value) {
      weather.value = undefined
      error.value = false
      return
    }

    try {
      error.value = false
      loading.value = true
      weather.value = await $fetch<Weather>(`${config.public.apiUrl}/v1/forecast.json`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
        params: {
          key: config.public.apiKey,
          q: qry.value.toLowerCase(),
          days: searchParams.limit,
          lang: searchParams.lang,
          aqi: 'no',
          alerts: 'no',
        },
      })
    }
    catch (e: unknown) {
      error.value = true
      weather.value = undefined
      if (e instanceof Error)
        console.error(e.message)
    }
    finally {
      loading.value = false
    }
  }

  const showCurrentWeather = computed(() => {
    return !loading.value && !!weather.value?.current && !!weather.value?.location
  })

  return {
    qry,
    weather,
    forecast,
    error,
    loading,
    showCurrentWeather,
    searchWeather,
  }
}
