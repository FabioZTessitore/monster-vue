<template>
    <div class="log">
        <div class="message" :key="message.id" :class="message.who" v-for="message in logger.messages.slice(0, 10)">
            {{message.who }} {{ message.message }}
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'logger' ]
}
</script>

<style scoped>
.log {
    background-color: #eee);
    width: 50%;
    margin: 0 auto;
    color: #333;
    font-size: 2rem;
}

.message {
    margin-bottom: .5rem;
    padding: 1rem;
}

.Human {
    background-color: #dfc0c0;
}

.Monster {
    background-color: rgb(181, 181, 211);
}
</style>