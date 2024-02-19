<script setup lang="ts">
const qry = ref('')

async function onSearch() {
  try {
    const data = await $fetch('')
  }
  catch (e: unknown) {
    //
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen p-4">
    <h1 class="text-2xl lg:text-5xl font-sans font-semibole mb-2 lg:mb-4">
      Weather app
    </h1>
    <div class="max-w-md w-full">
      <div class="flex flex-col lg:flex-row gap-2">
        <WInput v-model="qry" />
        <button class="p-2 bg-blue-500 text-slate-50 rounded-lg" @click="onSearch ">
          Search
        </button>
      </div>
      <pre class="mt-2 bg-gray-200 w-full">
      {{ qry }}
    </pre>
    </div>
  </div>
</template>
