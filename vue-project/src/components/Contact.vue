<template>
  <div class="bg-info rounded p-2 m-1">
    <div class="row">
      <div class="col-12">
        <h3>Name: {{ name }}</h3>
        <p>Email: {{ email }}</p>
        <p>Phone: {{ phone }}</p>
        <p class="float-end small" v-if="ownerName != ''">
          *this contact info belongs to {{ ownerName }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  name: { type: String, required: true },
  phone: Number,
  ownerName: String,
  email: { type: String, required: false, default: "N/A" },
  isFavorite: Boolean,
});

const email = ref("berd@gmail.com");
</script>
