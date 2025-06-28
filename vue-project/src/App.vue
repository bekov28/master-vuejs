<template>
  <div class="container">
    <div>{{ message }}</div>
    <div class="row">
      <div class="col-12" v-for="contact in contacts" :key="contact.name">
        <Contact
          :name="contact.name"
          :phone="contact.phone"
          :ownerName="contact.ownerName"
          :email="contact.email"
          :isFavorite="contact.isFavorite"
        ></Contact>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import Contact from "./components/Contact.vue";

const message = "Hello Vue";
const ownerName = ref("dotnetmastery");

const contacts = reactive([
  {
    name: "Bhrugen",
    phone: 123342343,
    ownerName: ownerName.value,
    isFavorite: false,
  },
  {
    name: "Bella",
    phone: 123342332432,
    ownerName: ownerName.value,
    isFavorite: true,
  },
  {
    name: "Ben",
    phone: 1233422432,
    ownerName: ownerName.value,
    isFavorite: false,
  },
]);
</script>

<style></style>
