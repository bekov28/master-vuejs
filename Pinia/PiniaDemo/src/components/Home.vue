<template>
  <div class="text-center">
    <p>Let's play the game</p>
    <h2 class="text-primary pb-3">Current Score: {{ gameStore.getScore }}</h2>
    <span class="text-primary pb-3">Max Score: {{ gameStore.maxHealth }}</span>

    <div class="row">
      <div class="col-4 offset-1 pt-2">
        <button class="form-control btn btn-success p-4" @click="Increment">Increment</button>
      </div>
      <div class="col-4 offset-1 pt-2">
        <button class="form-control btn btn-danger p-4" @click="Decrement">Decrement</button>
      </div>
      <div class="col-5 offset-3 pt-2">
        <button class="form-control btn btn-warning p-4" @click="Random">Random</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGameStore } from "@/store/gameStore";

const gameStore = useGameStore();

//Note that getters are cached!!
function Increment() {
  gameStore.setNextAttack();
}

function Decrement() {
  gameStore.setNextDefense();
}

function Random() {
  Math.random() > 0.5 ? Increment() : Decrement();
}
</script>
