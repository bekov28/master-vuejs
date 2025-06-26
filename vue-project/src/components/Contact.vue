<template>
  <div>
    <h1>Contact Us</h1>
    <p>Please send an email to {{ email }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("berd@gmail.com");
</script>
