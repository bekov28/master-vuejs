<template>
  <div class="bg-info rounded p-2 m-2">
    <h3>Name: {{ name }}</h3>
    <p>Email: {{ email }}</p>
    <p>Phone: {{ phone }}</p>
    <p class="float-end small" v-if="ownerName != ''">
      *this contact info belongs to {{ ownerName }}
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({name: String, phone : Number, ownerName: String});

const email = ref("berd@gmail.com");
</script>
