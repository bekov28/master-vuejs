<template>
  <div>Home Page</div>
  <button @click="goToContact">Contact Us</button>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
function goToContact() {
  router.push("/contact-us");
}
</script>
