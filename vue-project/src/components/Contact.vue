<template>
  <div class="bg-info rounded p-2 m-1">
    <div class="row">
      <div class="col-5">
        <h3>Name: {{ name }}</h3>
        <p>Email: {{ email }}</p>
        <p>Phone: {{ phone }}</p>
        <p class="float-end small" v-if="ownerName != ''">
          *this contact info belongs to {{ ownerName }}
        </p>
      </div>
      <div class="col-4">
        <button
          @click="toggleFavorite"
          :class="[isFavorite ? 'btn btn-warning form-control' : 'btn btn-success form-control']"
        >
          {{ isFavorite ? "Remove" : "Add" }} Favorite
        </button>
      </div>
      <div class="col-3">
        <LuckyNumber :maxNumber="100"></LuckyNumber>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LuckyNumber from "./LuckyNumber.vue";

const props = defineProps({
  name: { type: String, required: true },
  phone: Number,
  ownerName: String,
  email: { type: String, required: false, default: "N/A" },
  isFavorite: Boolean,
});
const email = ref("berd@gmail.com");

//for sending emits to parent component to listen
const emit = defineEmits(["update-favorite"]);

function toggleFavorite() {
  emit("update-favorite", [props.isFavorite, props.name]);
}
</script>
