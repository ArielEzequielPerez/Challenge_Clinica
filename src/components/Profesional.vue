<template>
  <h1>Profesionales</h1>
  <div class="container">
    <table class="table">
      <thead class="table-dark">
        <tr>
          <th>Historial</th>
          <th>Nombre</th>
          <th>Especialidad</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="profesional in profesionales">
          <td>{{ profesional.legajo }}</td>
          <td>{{ profesional.nombre }}</td>
          <td> {{ profesional.especialidad }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import profesionales from "../../datosDeTablas/profesional.json";
import { onMounted, ref, reactive } from "vue";
</script>
