<template>
  <div>
        <traffic-light color="green" :lightActive='false'></traffic-light>
        <traffic-light color='yellow' :lightActive='false'></traffic-light>
        <traffic-light color='red' lightActive :timeout=this.timeout></traffic-light>
    </div>
</template>

<script>
const RedLight = {
        data() {
            return {
                timeout: 10
            }
            
        },
        methods: {  
            pushForward() {
                setTimeout(() => { this.$router.push('/green') }, this.timeout * 1000)
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
        }
    }
export default RedLight
</script>

<style>
    
</style>