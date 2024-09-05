<script setup>
import { onMounted, ref, computed } from "vue";
import axios from "axios";

import PostForm from "../components/PostForm.vue";
import PostList from "../components/PostList.vue";
import MyDialog from "../components/UI/MyDialog.vue";
import MyButton from "../components/UI/MyButton.vue";
import MySelect from "../components/UI/MySelect.vue";
import MyInput from "../components/UI/MyInput.vue";

const posts = ref([]);
const dialogVisible = ref(false);
const isPostsLoading = ref(false);
const selectedSort = ref("");
const searchQuery = ref("");
const page = ref(1);
const limit = ref(10);
const totalPages = ref(10);
const sortOpions = ref([
  {
    value: "title",
    name: "По названию",
  },
  {
    value: "body",
    name: "По содержимому",
  },
]);

const createPost = (post) => {
  const newPost = {
    ...post,
    id: Date.now(),
  };

  posts.value.push(newPost);
  post.title = "";
  post.body = "";

  dialogVisible.value = false;
};

const removePost = (post) => {
  posts.value.splice(posts.value.indexOf(post), 1);
};

const showDialog = () => {
  dialogVisible.value = true;
};

const fetchPosts = async () => {
  try {
    isPostsLoading.value = true;
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _page: page.value,
          _limit: limit.value,
        },
      }
    );
    totalPages.value = Math.ceil(
      response.headers["x-total-count"] / limit.value
    );
    posts.value = response.data;
  } catch (err) {
    console.log(err);
  } finally {
    isPostsLoading.value = false;
  }
};

const loadMorePosts = async () => {
  try {
    if (page.value === totalPages.value) {
      return;
    }
    page.value += 1;
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _page: page.value,
          _limit: limit.value,
        },
      }
    );
    totalPages.value = Math.ceil(
      response.headers["x-total-count"] / limit.value
    );
    posts.value = [...posts.value, ...response.data];
  } catch (err) {
    console.log(err);
  }
};

onMounted(async () => {
  await fetchPosts();
});

const sortedPosts = computed(() =>
  [...posts.value].sort((post1, post2) =>
    post1[selectedSort.value]?.localeCompare(post2[selectedSort.value])
  )
);

const sortedAndSearchPosts = computed(() =>
  sortedPosts.value.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

// const onChangePage = async (pageNumber) => {
//   page.value = pageNumber;
//   await fetchPosts();
// };
</script>

<template>
  <h2 class="text-2xl font-medium mt-2">Cтраница с постами</h2>
  <MyInput
    v-focus
    class="w-full mt-4"
    v-model="searchQuery"
    placeholder="Поиск..."
  />
  <div class="flex flex-col sm:flex-row justify-between my-4 gap-2">
    <MyButton @click="showDialog">Создать новый пост</MyButton>
    <MySelect v-model="selectedSort" :sortOpions="sortOpions" />
  </div>

  <MyDialog v-if="dialogVisible" v-model:show="dialogVisible">
    <PostForm @createPost="createPost" />
  </MyDialog>

  <PostList
    v-if="!isPostsLoading"
    :posts="sortedAndSearchPosts"
    @removePost="removePost"
  />
  <div v-else>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <g stroke="currentColor">
        <circle
          cx="12"
          cy="12"
          r="9.5"
          fill="none"
          stroke-linecap="round"
          stroke-width="3"
        >
          <animate
            attributeName="stroke-dasharray"
            calcMode="spline"
            dur="1.5s"
            keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
            keyTimes="0;0.475;0.95;1"
            repeatCount="indefinite"
            values="0 150;42 150;42 150;42 150"
          />
          <animate
            attributeName="stroke-dashoffset"
            calcMode="spline"
            dur="1.5s"
            keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
            keyTimes="0;0.475;0.95;1"
            repeatCount="indefinite"
            values="0;-16;-59;-59"
          />
        </circle>
        <animateTransform
          attributeName="transform"
          dur="2s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        />
      </g>
    </svg>
  </div>
  <div v-intersection="loadMorePosts" class="observer h-2"></div>
  <!-- <div class="flex mt-4 gap-2">
      <div
        :class="{
          'border-teal-500': page === pageNumber,
        }"
        class="border border-black p-2 cursor-pointer"
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        @click="onChangePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div> -->
</template>
