<script setup lang="ts">
import ForecastWidget from '~/components/ForecastWidget.vue'

const { weather, forecast, qry, loading, error, showCurrentWeather, searchWeather } = useWeather()

function onSubmit() {
  searchWeather()
}
</script>

<template>
  <div class="flex flex-col items-center p-4">
    <h1 class="text-2xl lg:text-5xl font-sans font-semibole mb-2 lg:mb-4">
      Weather app
    </h1>
    <div class="max-w-md w-full">
      <form name="search-weather" @submit.prevent="onSubmit">
        <div class="flex flex-col lg:flex-row gap-2">
          <WInput v-model="qry" placeholder="Поиск по названию города" autofocus />
          <button class="p-2 bg-blue-500 text-slate-50 rounded-lg" @click="onSubmit">
            Поиск
          </button>
        </div>
      </form>
      <div class="mt-2">
        <div v-if="loading">
          Загрузка...
        </div>
        <CurrentWeatherWidget v-if="showCurrentWeather" :location="weather!.location" :current-weather="weather!.current" />
        <div v-if="error" class="p-3 bg-pink-50 border border-pink-300 text-pink-500 text-sm rounded-lg">
          Не удалось найти информацию о погоде в указанном городе.
        </div>

        <template v-if="showCurrentWeather">
          <ForecastWidget title="Прогноз на 3 дня" :forecast="forecast" class="mt-4" />
        </template>
      </div>
    </div>
  </div>
</template>
