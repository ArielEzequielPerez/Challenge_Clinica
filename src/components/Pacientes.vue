<template>
  <h1>Pacientes</h1>
  <div class="container">
    <table class="table">
      <thead class="table-dark">
        <tr>
          <th>Historial</th>
          <th>Nombre</th>
          <th>Consulta</th>
          <th>Profesional</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="paciente in pacientes">
          <td>{{ paciente.historial }}</td>
          <td>{{ paciente.nombre }}</td>
          <td>
            <tr class="table" v-for="consulta in paciente.consutas">
              <td>
                <div>
                  <p>
                    Dolencia: <em>{{ consulta.dolencia }}</em>
                  </p>
                  <p>
                    Suceso: <em>{{ consulta.suceso }}</em>
                  </p>
                </div>
              </td>
            </tr>
          </td>
          <td>{{ paciente.profesional }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import pacientes from "../../datosDeTablas/paciente.json";
import { onMounted, ref, reactive } from "vue";

// Aca deberia estar conectado con una api
</script>
<style>
.tr {
  display: flex;
  justify-content: center;
}
.check {
  width: 30px;
  height: 30px;
}

input[type="checkbox"] {
  cursor: pointer;
  transform: scale(2);
}
</style>
