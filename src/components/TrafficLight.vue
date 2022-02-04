<template>
  <div :style="{
      backgroundColor: this.color, 
      }"
      v-bind:class="{'traffic_light-active': this.lightActive, 'traffic_light-blinking': this.timeout <= 3}" 
      class='traffic_light'></div>
</template>

<script>
    const TrafficLight = {
        props: {
            color: {
                type: String,
                required: true
            },
            lightActive: {
                type: Boolean,
                required: true
            },
            timeout: {
                type: Number,
                required: false
            }
        },
        
    }
    export default TrafficLight
</script>

<style scoped>
    .traffic_light {
        width: 150px;
        height: 150px;
        border-radius: 100%;
        opacity: 0.25
    }
    .traffic_light-active {
        opacity: 1
    }
    .traffic_light-blinking {
        animation: blinking 3s
    }
    @keyframes blinking {
        0%, 40%, 80%, 100% {
            opacity: 1;
        }
        10%, 50%, 90% {
            opacity: 0.25;
        }
    }
</style>