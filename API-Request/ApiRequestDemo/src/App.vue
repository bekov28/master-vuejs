<template>
  <h1>JSON Server Demo using Axios</h1>
  <br /><br />
  <div v-for="post in postObject.posts" :key="post.id">
    <h2>{{ post.id }}. {{ post.title }}</h2>
    <p>{{ post.views }}</p>
  </div>
</template>
<script setup>
import { reactive, onMounted } from "vue";
import axios from "axios";

const postObject = reactive({
  posts: [],
});

onMounted(() => {
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data)
  //     userObject.users = data;
  //   })
  //   .catch((err) => err);
  axios.get("http://localhost:3000/posts").then((response) => {
    console.log(response.data);
    postObject.posts = response.data;
  });
});
</script>
