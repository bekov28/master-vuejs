<template>
  <div>{{ message }}</div>
  
  
  <div>
  <ButtonCounter></ButtonCounter>
  <ButtonCounter></ButtonCounter>
  <Contact></Contact> 
</template>
  </div>


<script setup>
import { ref } from "vue";
import ButtonCounter from "@/components/ButtonCounter.vue";
import Contact from "./components/Contact.vue";

const message = "Hello Vue";
</script>

<style></style>
