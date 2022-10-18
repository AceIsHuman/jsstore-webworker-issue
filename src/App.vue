<template>
  <div id="app">
    {{ isLoading ? 'Loading database...' : 'Database loaded.' }}
  </div>
</template>

<script>
import { initJsStore } from './service/connection'

export default {
  name: 'App',
  data: () => ({
    isLoading: true
  }),
  async mounted () {
    // When component is mounted JsStore is expected to load/create
    // the database. Upon success isLoading will be set to false
    // Render should then state 'Database loaded.'
    try {
      await initJsStore()
    } catch (err) {
      console.error(err)
    } finally {
      this.isLoading = false
    }
  }
}
</script>>