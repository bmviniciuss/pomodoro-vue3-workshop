<template>
  <button :class="buttonClass">
    <slot></slot>
  </button>
</template>

<script>

export default {
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

  data () {
    return {
      buttonBaseClasses: 'py-2 px-4 w-full rounded-lg font-bold focus:outline-none transition-all ease-out bg-white'
    }
  },

  computed: {
    activeClasses () {
      if (!this.active) return 'idle-state'
      return ''
    },

    colorClasses () {
      if (this.color === 'red') {
        return 'text-red-800'
      }
      return 'text-gray-900'
    },

    buttonClass () {
      const parentAttrs = this.$attrs?.class || ''
      return [
        parentAttrs,
        this.buttonBaseClasses,
        this.activeClasses,
        this.colorClasses
      ]
    }
  }
}
</script>

<style scoped>
.idle-state {
  box-shadow: rgb(235 235 235) 0px 5px 0px;
  transform: translateY(-5px);
}
</style>
