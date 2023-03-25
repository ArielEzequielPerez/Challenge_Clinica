<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router';
</script>

<template>
    <header>
        <Navbar/>
    </header>
    <div>
        <RouterView/>
    </div>
</template>
<script>
</script>

