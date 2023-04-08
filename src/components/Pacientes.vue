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
            <button
              type="button"
              class="btn btn-info"
              v-on:click="verConsultas(paciente.id)"
            >
              Consultas
            </button>
            <div v-if="mostrarDetalles">
              <!-- Componente modal -->
              <teleport to="body">
                <div class="modal">
                  <div class="modal-content">
                    <!-- Contenido del modal -->
                    <h2>Detalles</h2>
                    <p>Información adicional sobre el elemento.</p>
                    <button v-on:click="ocultarPopup">Cerrar</button>
                  </div>
                </div>
              </teleport>
              <!-- Fondo oscuro detrás del modal -->
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
import { onMounted, ref, reactive } from "vue";

const mostrarDetalles = ref(false);

function verConsultas(id: number) {
  const pacienteEncontrado = pacientes.find((paciente) => paciente.id === id);
  if (pacienteEncontrado == null) {
    alert("Paciente no encontrado");
  }
  if (pacienteEncontrado?.consutas.length === 0) {
    alert("El paciente no tiene consultas");
  }
  mostrarDetalles.value = true;
  console.log({ paciente: pacienteEncontrado });

  return pacienteEncontrado?.consutas;
}
function ocultarPopup() {
  mostrarDetalles.value = false;
}
</script>
<style>
.p {
  font-weight: 100;
}
</style>
