<template>
  <!-- <div class="bg-black text pt-3" :style="{ height: '100vh' }">
    <h1 class="text-center text-success">ContactOPedia</h1>
    <div class="container">
      <div class="row text-white p-2 mb-2">
        <div class="col-6">Owner Name: <input v-model="ownerName" /></div>
        <div class="col-6 text-end">Max Lucky Number: <input v-model.number="maxNumber" /></div>
      </div>
      <br /><br />
      <AddContact :onAddContact="onAddContact"></AddContact>
      <div class="row">
        <div class="col-12" v-for="contact in contacts" :key="contact.name">
          <Contact
            :name="contact.name"
            :phone="contact.phone"
            :ownerName="contact.ownerName"
            :email="contact.email"
            :isFavorite="contact.isFavorite"
            @update-favorite="contact.isFavorite = onUpdateFavorite($event)"
          ></Contact>
        </div>
      </div>
    </div>
  </div> -->
  <h1>{{ message }}</h1>
  <button @click="showMessage">Show Message</button>
  <h1>{{ count }}</h1>
  <button @click="count++">Clicked {{ count }} times</button>
  <ButtonCounter v-if="count == 1"></ButtonCounter>
</template>

<script setup>
// import { reactive, ref, provide } from "vue";
// import Contact from "./components/Contact.vue";
// import AddContact from "./components/AddContact.vue";
import ButtonCounter from "./components/ButtonCounter.vue";
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

const message = ref("Hello Vue");
const showMessage = () => {
  message.value = "Hello Vue from function";
};
const count = ref(0);

onBeforeMount(() => {
  console.log("onBeforeMount - App.vue");
});

onMounted(() => {
  console.log("onMounted - App.vue");
});

onBeforeUpdate(() => {
  console.log("onBeforeUpdate  - App.vue");
});

onUpdated(() => {
  console.log("onUpdated  - App.vue");
});

onBeforeUnmount(() => {
  console.log("onBeforeUnmount  - App.vue");
});

onUnmounted(() => {
  console.log("onUnmounted  - App.vue");
});

// const ownerName = ref("dotnetmastery");
// const maxNumber = ref(100);
// provide("maxLuckyNumber", maxNumber); //need to pass complete ref here, so maxNumber.value doesnt work

// const contacts = reactive([
//   {
//     name: "Bhrugen",
//     phone: 123342343,
//     ownerName: ownerName,
//     isFavorite: false,
//   },
//   {
//     name: "Bella",
//     phone: 123342332432,
//     ownerName: ownerName,
//     isFavorite: true,
//   },
//   {
//     name: "Ben",
//     phone: 1233422432,
//     ownerName: ownerName,
//     isFavorite: false,
//   },
// ]);

// function onAddContact(contact) {
//   contact.ownerName = ownerName.value;
//   contact.isFavorite = false;
//   contacts.push(contact);
// }

// function onUpdateFavorite(oldValuesFromChildComponent) {
//   console.log(oldValuesFromChildComponent);
//   return !oldValuesFromChildComponent[0];
// }
</script>

<style></style>
