<script setup lang="ts">
export interface KTextFieldProps {
  /**
   * Text field value
   */
  modelValue?: string

  /**
   * Placeholder text
   */
  placeholder?: string

  /**
   * Max length
   */
  maxLength?: number
}
const props = withDefaults(defineProps<KTextFieldProps>(), {
  state: 'normal',
  maxLength: 1000,
})

const emit = defineEmits<{
  (evt: 'update:modelValue', v: string): void
}>()

const text = ref(props.modelValue ?? '')

watch(
  () => props.modelValue ?? '',
  (newValue) => {
    text.value = newValue
  },
)

const input = ref<HTMLElement | null>()

function emitInput(e: Event) {
  const v = getValue(e)
  text.value = v
  emit('update:modelValue', text.value)
}

function getValue(e: Event): string {
  const target = e.target as HTMLInputElement

  return target.value
}
</script>

<template>
  <input
    ref="input"
    type="text"
    :value="text"
    :placeholder="placeholder"
    :maxlength="maxLength"
    class="border
    placeholder:text-gray-500
    rounded-lg
    px-3
    py-[9px]
    focus:ring-4
    text-gray-800
    text-base
    leading-[20px]
    w-full
    border-slate-300
    focus:border-blue-400
    focus:ring-blue-200"
    @input="emitInput"
  >
</template>
