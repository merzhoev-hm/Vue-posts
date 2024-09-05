<script setup>
import MyButton from "./UI/MyButton.vue";

const props = defineProps({
  post: Array,
});

const emit = defineEmits(["removePost"]);
</script>

<template>
  <div
    class="border-2 border-emerald-800 p-2 flex justify-between items-center"
  >
    <div>
      <p>{{ post.id }}</p>
      <h3>Название: {{ post.title }}</h3>
      <p>Описание: {{ post.body }}</p>
    </div>
    <div class="flex flex-col sm:flex-row gap-2 m-2">
      <RouterLink :to="`/posts/${post.id}`">
        <MyButton>Открыть</MyButton></RouterLink
      >
      <MyButton @click="emit('removePost')">Удалить</MyButton>
    </div>
  </div>
</template>
