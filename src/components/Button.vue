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
      default: 'blue'
    }
  },
  emits: ['click'],
  setup (props, ctx) {
    const buttonClass = computed(() => {
      const parentAttrs = ctx?.attrs?.class || ''
      return [
        'py-2',
        'px-4',
        'w-full',
        'transition',
        'border',
        `bg-${props.color}-700`,
        `border-${props.color}-600`,
        `hover:bg-${props.color}-600`,
        'text-white',
        'rounded-lg font-bold focus:outline-none',
        parentAttrs
      ]
    })

    const handleClick = (evt) => {
      ctx.emit('click', evt)
    }

    return { buttonClass, handleClick }
  }
})
</script>
