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
                @click.self="handleTimerButtonClick"
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
import Button from '../components/Button.vue'
import Header from '../components/Header.vue'

import { padTime, formatTime } from '../utils'

const INITIAL_TIME = 3

export default {
  name: 'HomeView',
  components: {
    Button,
    Header
  },
  data () {
    return {
      isRunning: false,
      initialTime: INITIAL_TIME,
      currentTime: INITIAL_TIME,
      timer: null
    }
  },

  computed: {
    minutes () {
      return padTime(Math.floor(this.currentTime / 60))
    },
    seconds () {
      return padTime(this.currentTime - this.minutes * 60)
    },

    formattedTime () {
      return formatTime(this.minutes, this.seconds)
    }
  },

  methods: {
    startTimer () {
      this.isRunning = true
      this.timer = setInterval(() => this.clockTime(), 1000)
    },

    stopTimer () {
      this.isRunning = false
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },

    resetTimer () {
      this.stopTimer()
      this.currentTime = this.initialTime
    },

    clockTime () {
      if (this.isRunning) {
        if (this.currentTime >= 1) {
          this.currentTime = this.currentTime - 1
        } else {
          console.log('DONE')
          this.resetTimer()
        }
      }
    },

    handleTimerButtonClick () {
      if (this.isRunning) {
        this.stopTimer()
      } else {
        this.startTimer()
      }
    }
  }
}
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
