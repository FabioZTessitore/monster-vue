<template>
    <div class="game">
        <div class="game__scores">
            
            <div class="actor">
                <div class="actor__label">Human</div>
                <div class="actor__life" :style="{ width: human.life + '%' }">{{ human.life }}</div>
            </div>

            <div class="actor">
                <div class="actor__label">Monster</div>
                <div class="actor__life" :style="{ width: monster.life + '%' }">{{ monster.life }}</div>
            </div>

        </div>

        <template v-if="!game.isRunning">
            <div class="game__actions">
                <button class="btn btn--primary btn--animated" @click="startGame">Start Game</button>
            </div>
        </template>
        <template v-else>
            <div class="game__actions">
                <button class="btn btn--primary btn--animated" @click="attack">Attack</button>
                <button class="btn btn--accent btn--animated" @click="specialAttack">Special Attack</button>
                <button class="btn btn--warning btn--animated" @click="heal">Heal</button>
                <button class="btn btn--danger btn--animated" @click="giveUp">Give Up</button>
            </div>
        </template>
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
