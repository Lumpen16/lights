<template>
    <div>
        <div class="traffic-lights">
            <router-view @updateParent='onUpdate'/>
        </div>
        <light-counter :counter='this.counter'/>
    </div>
    
</template>

<script>
    const App = {
        data() {
            return {
                page: this.$route.path,
                counter: 15 
            }
            
        },
        methods: {
            onUpdate(data) {
                this.counter = data.counter 
            }
        },
    }
    export default App
</script>


<style> 
    #app {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #app > div {
        display: flex;
        gap: 100px;
    }
    .traffic-lights {
        width: 200px;
        height: 500px;
        background-color: rgba(0,0,0,.75);
        border-radius: 24px;
    }
    .traffic-lights div {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

    }
    @media (max-width: 500px) {
        #app > div {
            flex-direction: column;
        }
    }
</style>