<script setup lang="ts">
import type { ForecastDayInfo } from '@/types/global'

const props = defineProps<{
  dayinfo: ForecastDayInfo
}>()

const { iconUrl } = useCondition(toRef(props.dayinfo.day, 'condition'))
</script>

<template>
  <BaseCollapsibleCard class="py-1 px-2">
    <template #header>
      <div class="flex gap-1 items-center">
        <div class="w-16 text-sm">
          {{ $dayjs(dayinfo.date).format('DD MMM') }}
        </div>
        <div class="flex items-center gap-2">
          <img :src="iconUrl" class="w-4 h-4">

          <div class="font-semibold text-xl w-16">
            {{ dayinfo.day.avgtemp_c }}°C
          </div>
        </div>

        <div class="text-sm ">
          {{ dayinfo.day.condition.text }}
        </div>
      </div>
    </template>

    <WeatherParams :humidity="dayinfo.day.avghumidity" :wind-speed="dayinfo.day.maxwind_kph" />
  </BaseCollapsibleCard>
</template>
