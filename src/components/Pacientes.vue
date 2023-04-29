<template>
  <h1>Pacientes</h1>
  <div class="container">
    <table class="table">
      <thead class="table-dark">
        <tr>
          <th>Historial</th>
          <th>Nombre</th>
          <th>Consulta</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="paciente in pacientes">
          <td>{{ paciente.historial }}</td>
          <td>{{ paciente.nombre }}</td>
          <td>
            <div>
              <button
                type="button"
                class="btn btn-info"
                v-on:click="verPopup()"
              ></button>
              
              <table v-if="mostrarDetalles">
                <thead>
                  <tr>
                    <th>Accion</th>
                    <th>Fecha</th>
                  </tr>
                </thead>
                <tbody v-for="consulta in paciente.consutas">
                  <tr>
                    <td>{{ consulta.accion }}</td>
                    <td>{{ consulta.fecha }}</td>
                  </tr>
                  <tr></tr>
                </tbody>
              </table>
            </div>
            <div v-if="mostrarDetalles">
              <div class="modal-overlay" v-on:click="ocultarPopup"></div>
            </div>
            <!-- <button v-on:click="mostrarPopup(paciente.consutas)">Ver Consultas</button> -->
            <!-- <tr class="table" v-for="consulta in paciente.consutas">
              <td>
                <p>Acción: {{ consulta.accion }}</p>
                <p>Fecha: {{ consulta.fecha }}</p>
                <p>Profesional: {{ consulta.profesional }}</p>
                <p>Costo Consulta {{ consulta.costoConsulta }}</p>
                <p>Descripción: {{ consulta.descripcion }}</p>
                <p>
                  Costo del Material: {{ consulta.costoMaterialDescartable }}
                </p>
              </td>
            </tr> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import pacientes from "../../datosDeTablas/paciente.json";
import Consultas from "../components/Consultas.vue";
import { onMounted, ref, reactive } from "vue";

const mostrarDetalles = ref();

function ocultarPopup() {
  mostrarDetalles.value = false;
}
function verPopup() {
  mostrarDetalles.value = true;
}
</script>
<style>
.p {
  font-weight: 100;
}
</style>
