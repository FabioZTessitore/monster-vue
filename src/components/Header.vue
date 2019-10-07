<template>
    <header class="header">
        <h1 class="heading-primary">
            <span class="heading-primary--main">Monster Attack</span>
            <span class="heading-primary--sub">where you fight a big monster</span>
        </h1>
    </header>
</template>

<style scoped>
.header {
    position: relative;
    width: 100%;
    height: 20vh;
    margin-bottom: 3rem;
}

.heading-primary {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.heading-primary--main {
    display: block;
    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 2rem;
}

.heading-primary--sub {
    display: block;
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: .93rem;
}
</style>