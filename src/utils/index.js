export function padTime (time) {
  return (time < 10 ? '0' : '') + time
}

export function formatTime (minutes, seconds) {
  return `${minutes}:${seconds}`
}
