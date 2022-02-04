<template>
  <div>
        <traffic-light color="green" :lightActive='false'></traffic-light>
        <traffic-light color='yellow' lightActive :timeout=this.timeout></traffic-light>
        <traffic-light color='red' :lightActive='false'></traffic-light>
    </div>
</template>

<script>
const YellowLight = {
        data() {
            return {
                timeout: 3
            }
            
        },
         methods: {  
            pushForward() {
                setTimeout(() => { this.$router.push('/red') }, this.timeout * 1000)
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
export default YellowLight
</script>

<style>
</style>