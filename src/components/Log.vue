<template>
    <div class="log">
        <div class="log__message" v-for="message in recentMessages"
            :key="message.id"
            :class="'log--' + message.who">
            {{message.who }} {{ message.message }}
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'logger' ],

    computed: {
        recentMessages () {
            return this.logger.messages.slice(0, 10)
        }
    }
}
</script>
