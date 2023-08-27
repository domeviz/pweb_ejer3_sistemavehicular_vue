import axios from "axios"

//Poner async
export const obtenerVehiculosFachada = async() =>{
    return obtenerVehiculos()
}

//Poner async
const obtenerVehiculos=async()=>{
    const data=axios.get('http://localhost:8080/API/v1.0/SistemaVehicular/vehiculos').then(r=>r.data);
    return data;
}

export const obtenerVehiculoPorPlacaFachada=async(placa)=>{
    return obtenerVehiculoPorPlaca(placa);
}

//Forma 1
// const obtenerVehiculoPorPlaca=async(placa)=>{
//     const data=axios.get('http://localhost:8080/API/v1.0/SistemaVehicular/vehiculos/'+placa).then(r=>r.data);
//     return data;
// }

const obtenerVehiculoPorPlaca=async(placa)=>{
    const data=axios.get(placa).then(r=>r.data);
    return data;
}