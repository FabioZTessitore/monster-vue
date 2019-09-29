<template>
    <div class="game">
        Game is running: {{ isRunning }}
        
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            isRunning: false
        }
    }
}
</script>