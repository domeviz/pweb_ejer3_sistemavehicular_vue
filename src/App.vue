<template>
  <ConsultarVehiculo></ConsultarVehiculo>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ConsultarVehiculo from './modulos/vehiculo/ConsultarVehiculo.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    ConsultarVehiculo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
