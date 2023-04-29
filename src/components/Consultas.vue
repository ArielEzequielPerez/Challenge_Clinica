<template>
  <div class="card">
    <table>
      <thead>
        <tr>
          <th>Encabezado 1</th>
          <th>Encabezado 2</th>
          <th>Encabezado 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dato 1</td>
          <td>Dato 2</td>
          <td>Dato 3</td>
        </tr>
        <tr>
          <td>Dato 4</td>
          <td>Dato 5</td>
          <td>Dato 6</td>
        </tr>
        <tr>
          <td>Dato 7</td>
          <td>Dato 8</td>
          <td>Dato 9</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const props = reactive({
    
})
</script>

<style>
.card {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}
</style>
