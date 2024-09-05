<script setup>
import PostItem from "./PostItem.vue";

defineProps({
  posts: Array,
});

const emit = defineEmits(["removePost"]);
</script>

<template>
  <div v-if="posts.length > 0" class="flex flex-col gap-2" v-auto-animate>
    <h3 class="text-xl font-medium">Список постов</h3>
    <PostItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @removePost="emit('removePost', post)"
    />
  </div>
  <h2 class="text-xl font-medium text-rose-700" v-else>Список постов пуст</h2>
</template>
