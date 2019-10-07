<template>
    <div class="game">
        <div class="actors">
            <div class="actors__human">
                Human
                <div class="human-life" :style="{ width: human.life + '%' }">{{ human.life }}</div>
            </div>
            <div class="actors__monster">
                Monster
                <div class="monster-life" :style="{ width: monster.life + '%' }">{{ monster.life }}</div>
            </div>
        </div>

        <template v-if="!game.isRunning">
            <div class="actions">
                <button class="btn btn--primary btn--animated" @click="startGame">Start Game</button>
            </div>
        </template>
        <template v-else>
            <div class="actions">
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

<style scoped>
.game {
    width: 50%;
    margin: 0 auto;
}

.actors {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 3rem;
}

.actors__human, .actors__monster {
    background-color: #eee;
    width: 100%;
    margin: 3rem;
    font-size: 4rem;
    text-align: center;
    color: #333;
}

.human-life, .monster-life {
    background-color: rgb(128, 128, 245);
    padding: 2rem;
    width: 100%;
    transition: all .2s;
}

.actions {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 3rem;
}

.btn {
    background-color: orangered;
    color: white;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1rem 3rem;
    border: none;
    border-radius: 3px;
    outline: none;
}

.btn--animated {
    transition: all .2s;
}

.btn--animated:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem #888;
}

.btn--animated:active {
    transform: translateY(-1px);
    box-shadow: 0 .5rem 1rem #888;
}

.btn--primary {
    background-color: rgb(47, 124, 175);
    color: #eee;
}

.btn--accent {
    background-color: rgb(220, 46, 226);
    color: #eee;
}

.btn--warning {
    background-color: rgb(223, 112, 21);
    color: #eee;
}

.btn--danger {
    background-color: orangered;
    color: #eee;
}
</style>