<template>
    <table>
        <tr>
            <th>Id</th>
            <th>Placa</th>
            <th>Color</th>
            <th>Modelo</th>
            <th>Marca</th>
            <th>Ver</th>
        </tr>
        <tr v-for="vehiculo in vehiculos">
            <td>{{ vehiculo.id }}</td>
            <td>{{ vehiculo.placa }}</td>
            <td>{{ vehiculo.color }}</td>
            <td>{{ vehiculo.modelo }}</td>
            <td>{{ vehiculo.marca }}</td>
            <!-- <td>{{ vehiculo.links[0].href }}</td> -->
            <td><button @click="consultarVehiculoPorPlaca(vehiculo.links[0].href)">Visualizar</button></td>
            <!-- Forma 1 -->
            <!-- <td><button @click="consultarVehiculoPorPlaca(vehiculo.placa)">Visualizar</button></td> -->
        </tr>
    </table>

    <div class="container">
        <label>Id</label>
        <input type="text" v-model="vehiculo.id"/>
        <label>Placa</label>
        <input type="text" v-model="vehiculo.placa"/>
        <label>Color</label>
        <input type="text" v-model="vehiculo.color"/>
        <label>Modelo</label>
        <input type="text" v-model="vehiculo.modelo"/>
        <label>Marca</label>
        <input type="text" v-model="vehiculo.marca"/>
    </div>
    
</template>

<script>
import { obtenerVehiculosFachada } from "./helper/vehiculoCliente.js"
import { obtenerVehiculoPorPlacaFachada } from "./helper/vehiculoCliente.js"

export default {
    data() {
        return {
            vehiculos: null,
            vehiculo:{
                id:null,
                placa:null,
                color:null,
                modelo:null,
                marca:null
            }
        }
    },
    methods: {
        async consultarVehiculos() {
            this.vehiculos = await obtenerVehiculosFachada()
            console.log(this.vehiculos)
        },
        //Forma 1
        // async consultarVehiculoPorPlaca(placa){
        //     this.vehiculo=await obtenerVehiculoPorPlacaFachada(placa)
        //     console.log(this.vehiculo)
        // }
        async consultarVehiculoPorPlaca(url){
            this.vehiculo=await obtenerVehiculoPorPlacaFachada(url)
            console.log(this.vehiculo)
        }
    },
    mounted() {
        this.consultarVehiculos()
    }
}
</script>

<style>
.container{
    display: grid;
}
</style>