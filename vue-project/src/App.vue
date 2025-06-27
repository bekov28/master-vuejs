<template>
  <div class="container">
    <div>{{ message }}</div>
    <Contact name="Berdiyor" :phone="12345678" :ownerName="contactsOwner"></Contact>
  </div>
</template>s

<script setup>
import Contact from "./components/Contact.vue";

const message = "Hello Vue";
const contactsOwner = "dotnetmastery";
</script>

<style></style>
