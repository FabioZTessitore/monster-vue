<template>
    <div class="game">
        <div class="actors">
            {{ human.life }} - {{ monster.life }}
        </div>

        <div class="actions" v-if="!game.isRunning">
            <button @click="startGame">Start Game</button>
        </div>
        
        <div class="actions" v-else>
            <button @click="attack">Attack</button>
            <button @click="specialAttack">Special Attack</button>
            <button @click="heal">Heal</button>
            <button @click="giveUp">Give Up</button>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'game', 'human', 'monster' ],

    methods: {
        startGame () {
            this.$emit('start-game')
        },

        giveUp () {
            this.$emit('give-up')
        },

        attack () {
            this.$emit('attack')
        },

        specialAttack () {
            this.$emit('special-attack')
        },

        heal () {
            this.$emit('heal')
        }
    }
}
</script>

<style scoped>
</style>