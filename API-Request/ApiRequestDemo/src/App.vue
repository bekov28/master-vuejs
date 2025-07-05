<template>
  <h1>JSON Server Demo using Axios</h1>
  <br /><br />
  <div v-for="user in userObject.users" :key="user.id">
    <h2>{{ user.id }}. {{ user.name }}</h2>
    <p>{{ user.email }}</p>
  </div>
</template>
<script setup>
import { reactive, onMounted } from "vue";
import axios from "axios";

const userObject = reactive({
  users: [],
});

onMounted(() => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    console.log(response.data);

    userObject.users = response.data;
  });
});
</script>
