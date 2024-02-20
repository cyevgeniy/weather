<script setup lang="ts">
import type { ForecastDayInfo } from '@/types/global'

const props = defineProps<{
  dayinfo: ForecastDayInfo
}>()

const { iconUrl } = useCondition(toRef(props.dayinfo.day, 'condition'))
</script>

<template>
  <div>
    <div>{{ dayinfo.date }}</div>
    <div>Средняя температура: {{ dayinfo.day.avgtemp_c }}°C</div>
    <div class="flex items-center gap-2">
      <img :src="iconUrl" class="w-8 h-8">

      <div class="font-semibold text-2xl">
        {{ dayinfo.day.avgtemp_c }}°C
      </div>
    </div>
  </div>
</template>
