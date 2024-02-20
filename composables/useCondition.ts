import type { Condition } from '~/types/global'

export function useCondition(condition: Ref<Condition>) {
  const iconUrl = computed(() => `https:${condition.value.icon}`)

  return {
    iconUrl,
  }
}
