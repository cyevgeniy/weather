<script setup lang="ts">
import type { ForecastDayInfo } from '@/types/global'

const props = defineProps<{
  dayinfo: ForecastDayInfo
}>()

const { iconUrl } = useCondition(toRef(props.dayinfo.day, 'condition'))
</script>

<template>
  <!-- <div class="flex gap-1 items-center p-2 drop-shadow-md bg-white h-10 rounded-lg"> -->
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

    <div class="border-l-2 border-blue-500 pl-2">
      <div class="flex items-center">
        <Icon size="1rem" name="material-symbols-light:humidity-percentage-outline" /> {{ dayinfo.day.avghumidity }}%
      </div>
      <div class="flex items-center">
        <Icon size="1rem" name="ph:wind-duotone" /> {{ dayinfo.day.maxwind_kph }}&nbsp;км/ч.
      </div>
    </div>
  </BaseCollapsibleCard>
  <!-- </div> -->
</template>
