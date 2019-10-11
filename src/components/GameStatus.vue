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
