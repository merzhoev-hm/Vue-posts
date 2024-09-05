<script setup>
import { ref } from "vue";
import MyButton from "./UI/MyButton.vue";
import MyInput from "./UI/MyInput.vue";

const post = ref({
  title: "",
  body: "",
});

const emit = defineEmits(["createPost"]);
</script>

<template>
  <form class="flex flex-col gap-4" @submit.prevent>
    <h4 class="text-2xl font-medium">Создание поста</h4>
    <div class="flex flex-col gap-2">
      <MyInput v-focus v-model="post.title" placeholder="Название" />
      <MyInput v-model="post.body" placeholder="Описание" />
    </div>
    <div class="flex justify-end">
      <MyButton
        :disabled="!post.title || !post.body"
        @click="emit('createPost', post)"
        >Создать</MyButton
      >
    </div>
  </form>
</template>
