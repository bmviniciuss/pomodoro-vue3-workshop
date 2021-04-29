<template>
  <div>
    <HelloWorld msg="Hello Vue 3 + Vite" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  components: {
    HelloWorld
  }
})

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
