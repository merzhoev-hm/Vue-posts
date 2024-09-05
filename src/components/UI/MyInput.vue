<script setup>
const model = defineModel();
</script>

<template>
  <input
    class="outline-0 border border-emerald-600 py-1 px-2"
    type="text"
    v-model="model"
  />
</template>
