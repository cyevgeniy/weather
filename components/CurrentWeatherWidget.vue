<script setup lang="ts">
import type { CurrentWeatherInfo, Location } from '@/types/global'

const props = defineProps<{
  location: Location
  currentWeather: CurrentWeatherInfo
}>()

const { iconUrl } = useCondition(toRef(props.currentWeather, 'condition'))
</script>

<template>
  <BaseCard>
    <div class="text-xs text-blue-500 mb-1">
      {{ currentWeather.last_updated }}
    </div>
    <div class="text-3xl font-semibold mb-1">
      {{ location.name }}
    </div>
    <div class="flex items-center gap-2">
      <img :src="iconUrl" class="w-8 h-8">

      <div class="font-semibold text-2xl">
        {{ currentWeather.temp_c }}°C
      </div>
    </div>
    <div class="mb-2">
      Oщущается как {{ currentWeather.feelslike_c }}°C. {{ currentWeather.condition.text }}.
    </div>
    <div class="border-l-2 border-blue-500 pl-2">
      <div class="flex items-center">
        <Icon size="1rem" name="material-symbols-light:humidity-percentage-outline" /> {{ currentWeather.humidity }}%
      </div>
      <div class="flex items-center">
        <Icon size="1rem" name="ph:wind-duotone" /> {{ currentWeather.wind_kph }}&nbsp;км/ч.
      </div>
    </div>
  </BaseCard>
</template>
