<script setup lang="ts">
const qry = ref('')

const weather = ref<any>('')
const loading = ref(false)
// Weatherapi returns error objects only in English, so
// use local flag and display handwritten error message in Russian
const error = ref(false)

async function onSearch() {
  if (!qry.value) {
    weather.value = undefined
    error.value = false
    return
  }

  try {
    error.value = false
    loading.value = true
    weather.value = await $fetch(`https://api.weatherapi.com/v1/forecast.json?key=aebb8f43d4ad4cdcaaa232004241902&q=${qry.value.toLowerCase()}&days=3&aqi=no&alerts=no&lang=ru`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
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
</script>

<template>
  <div class="flex flex-col items-center p-4">
    <h1 class="text-2xl lg:text-5xl font-sans font-semibole mb-2 lg:mb-4">
      Weather app
    </h1>
    <div class="max-w-md w-full">
      <div class="flex flex-col lg:flex-row gap-2">
        <WInput v-model="qry" />
        <button class="p-2 bg-blue-500 text-slate-50 rounded-lg" @click="onSearch ">
          Поиск
        </button>
      </div>
      <div class="mt-2">
        <div v-if="loading">
          Загрузка...
        </div>
        <CurrentWeatherWidget v-if="showCurrentWeather" :location="weather.location" :current-weather="weather.current" />
        <div v-if="error" class="p-3 bg-pink-50 border border-pink-300 text-pink-500 text-sm rounded-lg">
          Не удалось найти информацию о погоде в указанном городе.
        </div>
        <pre v-if="weather" class="mt-2 bg-gray-200 w-full h-[400px] overflow-auto">
        {{ weather }}
        </pre>
      </div>
    </div>
  </div>
</template>
