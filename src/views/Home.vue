<template>
  <div class="bg-red-500 w-full h-full">
    <div class="grid-container">
      <div class="center-wrapper">
        <Header />

        <div class="mt-4 text-white">
          <div class="bg-red-400 py-4 px-6 rounded">
            <div class="flex flex-row items-center justify-center gap-2">
              <div class="bg-red-700 px-3 py-1 rounded cursor-pointer">
                <p class="text-sm font-bold">Work</p>
              </div>

              <div class="px-3 py-1 rounded">
                <p class="text-sm">Short Break</p>
              </div>
            </div>

            <div class="text-center my-10">
              <h1 class="text-8xl font-bold">{{ formattedTime }}</h1>
            </div>

            <div class="flex flex-col justify-center items-center w-full">
              <Button
                class="mb-4"
                color="red"
                :active="isRunning"
                @click="handleTimerButtonClick"
              >
                {{ isRunning ? "Stop" : "Start" }}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import Button from '../components/Button.vue'
import Header from '../components/Header.vue'

import useTimer from '../hooks/useTimer'
import { formatTime } from '../utils'

export default defineComponent({
  name: 'HomeView',
  components: {
    Button,
    Header
  },
  setup () {
    const INITIAL_VALUE = 25 * 60
    const timer = useTimer(INITIAL_VALUE)

    const formattedTime = computed(() =>
      formatTime(timer.minutes.value, timer.seconds.value)
    )

    const handleTimerButtonClick = () => {
      if (timer.isRunning.value) {
        timer.stop()
      } else {
        timer.start()
      }
    }

    return {
      ...timer,
      formattedTime,
      handleTimerButtonClick
    }
  }
})
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 0.9fr 1fr;
  gap: 1rem;
  grid-template-areas: ". content .";
}

.center-wrapper {
  grid-area: content;
}
</style>
