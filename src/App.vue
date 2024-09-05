<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <div class="px-2 max-w-5xl mx-auto">
    <RouterView />
  </div>
</template>
