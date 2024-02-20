<script setup lang="ts">
defineProps<{
  humidity: number
  windSpeed: number
}>()
</script>

<template>
  <div class="border-l-2 border-blue-500 pl-2">
    <div class="flex items-center">
      <Icon size="1rem" name="material-symbols-light:humidity-percentage-outline" /> {{ humidity }}%
    </div>
    <div class="flex items-center">
      <Icon size="1rem" name="ph:wind-duotone" /> {{ windSpeed }}&nbsp;км/ч.
    </div>
  </div>
</template>
