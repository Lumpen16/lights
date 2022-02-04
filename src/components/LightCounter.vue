<template>
    <div>{{ this.stateTimeout }}</div>
</template>

<script>
    const LightCounter =  {
        props: {
            counter: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                stateTimeout: this.counter
            }
        },
        watch: {
            counter(newValue) {
                this.stateTimeout = newValue
            },
        },
    }
    export default LightCounter
</script>

<style scoped>
    div {
        color: rgb(85, 82, 82);
        font-size: 68px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
    }
</style>