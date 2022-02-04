<template>
    <div>
        <traffic-light color="green" lightActive :timeout='this.timeout'></traffic-light>
        <traffic-light color='yellow' :lightActive="false"></traffic-light>
        <traffic-light color='red' :lightActive='false'></traffic-light>
        <!-- <router-outlet></router-outlet> -->
    </div>
  
  
</template>

<script>
const GreenLight = {
        data() {
            return {
                timeout: 15
            }

        },
        methods: {  
            pushForward() {
                setTimeout(() => { this.$router.push('/yellow') }, this.timeout * 1000)
                setInterval(() => { this.timeout -= 1}, 1000)
            }
        },
        mounted() {
            this.$emit('updateParent', {
                counter: this.timeout - 1
            })
            this.pushForward()
        },
        watch: {
            timeout(newValue) {
                this.$emit('updateParent', {
                    counter: newValue - 1
                })
            }
        },
        
    }

export default GreenLight
</script>

<style>
    
</style>