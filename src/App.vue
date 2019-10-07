<template>
  <div id="app">
    <app-header></app-header>

    <app-game
      :game="game"
      :human="human"
      :monster="monster"
      @start-game="startGame"
      @give-up="giveUp"
      @attack="attack"
      @special-attack="specialAttack"
      @heal="heal">
    </app-game>

    <app-log></app-log>
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import GameComponent from './components/Game.vue'
import LogComponent from './components/Log'

import Actor from './models/Actor'
import Logger from './models/Log'
import Game from './models/Game'

export default {
  data () {
    return {
      game: new Game(),
      human: new Actor({
        life: 100,
        minAttack: 5,
        maxAttack: 10,
        specialFactor: 1.5
      }),
      monster: new Actor({
        life: 100,
        minAttack: 5,
        maxAttack: 10,
        specialFactor: 1.5
      }),
      log: new Logger()
    }
  },

  methods: {
    startGame () {
      this.human.reset()
      this.monster.reset()
      this.log.reset()
      this.game.start()
    },

    attack () {
      this.monster.normalAttack()
      this.human.normalAttack()
    },

    specialAttack () {
      this.monster.specialAttack()
      this.human.specialAttack()
    },

    heal () {
      this.human.heal()
      this.human.normalAttack()
    },

    giveUp () {
      this.game.stop()
    }
  },

  components: {
    appHeader: HeaderComponent,
    appGame: GameComponent,
    appLog: LogComponent
  }
}
</script>

<style>
*,
*::after,
*::before {
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
