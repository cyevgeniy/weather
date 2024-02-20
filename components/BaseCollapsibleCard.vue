<script setup lang="ts">
defineEmits<{
  (evt: 'open', open: boolean): void
}>()

const open = ref(false)

function toggleOpen() {
  open.value = !open.value
}
</script>

<template>
  <BaseCard>
    <div class="flex flex-col gap-1">
      <div class="flex gap-2 items-center">
        <div>
          <slot name="header" />
        </div>
        <div class="ml-auto shrink-0 flex flex-col items-center justify-center w-6 h-6 cursor-pointer rounded-full hover:bg-slate-100" @click="toggleOpen">
          <Icon
            name="material-symbols:keyboard-arrow-up-rounded" class="w-full h-full"
            :class="{
              'rotate-180': !open,
            }"
          />
        </div>
      </div>

      <div v-if="open">
        <slot />
      </div>
    </div>
  </BaseCard>
</template>
