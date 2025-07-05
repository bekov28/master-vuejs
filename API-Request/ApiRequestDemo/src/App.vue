<template>
  <div v-if="postObject.isLoading" class="d-flex justify-content-center p-4">
    <span class="loader"></span>
  </div>

  <div class="bg-white container p-4" v-else>
    <h1>JSON Server Demo using Axios</h1>
    <br /><br />
    <div v-for="post in postObject.posts" :key="post.id">
      <h2>{{ post.id }}. {{ post.title }}</h2>
      <p>{{ post.views }}</p>
    </div>
  </div>
</template>
<script setup>
import { reactive, onMounted } from "vue";
import axios from "axios";

const postObject = reactive({
  posts: [],
  isLoading: false,
});

onMounted(() => {
  postRequest();
});

function postRequest() {
  postObject.isLoading = true;
  axios.get("http://localhost:3000/posts").then((response) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(response);
      }, 1000)
    ).then((response) => {
      console.log(response.data);
      postObject.posts = response.data;
      postObject.isLoading = false;
    });
  });
}
</script>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
