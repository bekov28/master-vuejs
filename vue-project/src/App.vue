<template>
  <div class="container">
    <div>{{ message }}</div>
    <Contact name="Berdiyor" phone="010 0000 0000"></Contact>
  </div>
</template>

<script setup>
import Contact from "./components/Contact.vue";

const message = "Hello Vue";
</script>

<style></style>
