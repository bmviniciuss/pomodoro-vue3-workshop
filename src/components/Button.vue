<template>
  <button :class="buttonClass" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
import { computed, defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'v-button',
  props: {
    color: {
      type: String,
      default: 'red'
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup (props, ctx) {
    const buttonBaseClasses = 'py-2 px-4 w-full rounded-lg font-bold focus:outline-none transition-all ease-out bg-white'

    const activeClasses = computed(() => {
      if (!props.active) return 'idle-state'
      return ''
    })

    const colorClasses = computed(() => {
      if (props.color === 'red') {
        return 'text-red-800'
      }
      return 'text-gray-900'
    })

    const buttonClass = computed(() => {
      const parentAttrs = ctx?.attrs?.class || ''
      return [
        parentAttrs,
        buttonBaseClasses,
        activeClasses.value,
        colorClasses.value
      ]
    })

    const handleClick = (evt) => {
      ctx.emit('click', evt)
    }

    return { buttonClass, handleClick }
  }
})
</script>

<style scoped>
.idle-state {
  box-shadow: rgb(235 235 235) 0px 5px 0px;
  transform: translateY(-5px);
}
</style>
