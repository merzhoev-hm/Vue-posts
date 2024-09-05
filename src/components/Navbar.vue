<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-5xl flex items-center justify-between p-2">
      <RouterLink to="/">
        <svg
          fill="#4FC08D"
          class="h-6 w-6"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Vue.js</title>
          <path
            d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"
          />
        </svg>
      </RouterLink>
      <div class="flex space-x-4">
        <RouterLink
          to="/posts"
          href="#"
          class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          aria-current="page"
          >Посты</RouterLink
        >
        <RouterLink
          to="/about"
          href="#"
          class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >О сайте</RouterLink
        >
      </div>
    </div>
  </nav>
</template>
