<template>
  <div>{{ message }}</div>
  <contact></contact>
  <button-counter></button-counter>
</template>

<script>
import Contact from "./components/Contact.vue";

export default {
  setup() {
    const message = "Hello Vue";
    return { message };
  },
};
</script>

<style></style>
