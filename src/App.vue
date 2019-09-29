<template>
  <div id="app">
    <app-header></app-header>

    <app-game></app-game>

    <app-log></app-log>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Game from './components/Game.vue'
import Log from './components/Log'

export default {
  components: {
    appHeader: Header,
    appGame: Game,
    appLog: Log
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
