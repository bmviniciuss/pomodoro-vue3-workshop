import { reactive, computed, toRef } from 'vue'
import { padTime } from '../utils'

export default function useTimer (initialTime = 0, onFinish = () => {}) {
  const state = reactive({
    isRunning: false,
    initialTime,
    currentTime: initialTime,
    timer: null,
    minutes: computed(() => padTime(Math.floor(state.currentTime / 60))),
    seconds: computed(() => padTime(state.currentTime - state.minutes * 60))
  })

  const startTimer = () => {
    state.isRunning = true
    state.timer = setInterval(() => clockTime(), 1000)
  }

  const stopTimer = () => {
    state.isRunning = false
    if (state.timer) {
      clearInterval(state.timer)
      state.timer = null
    }
  }

  const resetTimer = () => {
    stopTimer()
    state.isRunning = false
    state.currentTime = state.initialTime
  }

  const clockTime = () => {
    if (state.isRunning) {
      if (state.currentTime >= 1) {
        state.currentTime = state.currentTime - 1
      } else {
        if (onFinish) {
          console.log('DONE')
          onFinish()
        }
        resetTimer()
      }
    }
  }

  return {
    isRunning: toRef(state, 'isRunning'),
    minutes: toRef(state, 'minutes'),
    seconds: toRef(state, 'seconds'),
    timeLeft: toRef(state, 'currentTime'),
    start: startTimer,
    stop: stopTimer,
    reset: resetTimer
  }
}
