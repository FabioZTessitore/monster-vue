<template>
    <div class="game-status" @click="close">
        <template v-if="status === 'win'">
            You Win
        </template>
        <template v-if="status === 'lost'">
            You Lost
        </template>
        <template v-if="status === 'giveup'">
            You Give Up
        </template>
    </div>
</template>

<script>
export default {
    props: [ 'status' ],

    methods: {
        close () {
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
.game-status {
    margin: 0 auto;
    z-index: 1;
    background-color: #eee;
    font-size: 6rem;
    text-align: center;
    padding: 8rem 24rem;
    border-radius: 5px;
    border: 1px solid #333;
    box-shadow: 0 2rem 4rem #666;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>