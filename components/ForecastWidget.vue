<script setup lang="ts">
import type { ForecastDayInfo } from '~/types/global'

defineProps<{
  title: string
  forecast: ForecastDayInfo[]
}>()
</script>

<template>
  <div>
    <h2 class="text-lg text-gray-800 font-bold">
      {{ title }}
    </h2>
    <div class="flex flex-col gap-1 sm:gap-2 mt-2">
      <ForecastDay
        v-for="dayinfo in forecast"
        :key="dayinfo.date"
        :dayinfo="dayinfo"
      />
    </div>
  </div>
</template>
