<script setup>
const show = defineModel("show");
</script>

<template>
  <div
    class="top-0 left-0 bottom-0 right-0 bg-black/50 flex fixed z-50"
    @click="show = false"
  >
    <div @click.stop class="m-auto bg-white rounded-xl min-h-12 min-w-72 p-4">
      <slot></slot>
    </div>
  </div>
</template>
