<template>
  <div class="bg-info rounded p-2 m-2">
    <h3>Name: {{ name }}</h3>
    <p>Email: {{ email }}</p>
    <p>Phone: {{ phone }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(['name', 'phone']);

const email = ref("berd@gmail.com");
</script>
