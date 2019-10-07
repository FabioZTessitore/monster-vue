<template>
    <div class="log">
        <div class="message" :key="message.id" v-for="message in logger.messages">
            {{ message.message }}
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'logger' ]
}
</script>