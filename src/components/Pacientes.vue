
<template>
   <table class="table stripped bordered">
      <thead>
         <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Consulta</th>
            <th></th>
         </tr>
      </thead>
      <tbody>
         <tr v-for="paciente in pacientes">
            <td>{{ paciente.historia_clinica }}</td>
            <td>{{ paciente.nombre }}</td>
            <td> <a> <i class="fa-sharp fa-solid fa-list-ul"></i> </a> Consultas </td>
         </tr>
      </tbody>
   </table>
</template>
<script setup lang="ts">
import pacienteConsultas from '../../datosDeTablas/paciente.json'
import { onMounted, ref , reactive } from 'vue';
var pacientes = ref(null)

onMounted(fetchPacientes)
function fetchPacientes(){
  pacientes.value = fetch(../../datosDeTablas/paciente.json).then(res => res.json()
}
</script>