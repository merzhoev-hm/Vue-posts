<script setup>
defineProps({
  sortOpions: Array,
});

const model = defineModel();
</script>

<template>
  <select class="outline-0 border px-2 py-2" v-model="model">
    <option disabled value="">Выберите из списка</option>
    <option
      v-for="option in sortOpions"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>
