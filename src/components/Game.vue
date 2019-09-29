<template>
    <div class="game">
        Game is running: {{ isRunning }}

        <div class="test">
            <button @click="decrease">Decrease life</button>
            <p>Human Life: {{ human.life }}</p>
        </div>
    </div>
</template>

<script>
import Human from '../models/Human'

export default {
    data: function () {
        return {
            isRunning: false,
            human: new Human(100)
        }
    },

    methods: {
        decrease () {
            this.human.decreaseLife()
        }
    }
}
</script>

<style scoped>
.test {
    font-size: 2rem;
}
</style>