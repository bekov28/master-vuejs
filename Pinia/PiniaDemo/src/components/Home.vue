<template>
  <div class="text-center">
    <p>Let's play the game</p>
    <h2 class="text-primary pb-3">Current Score: {{ gameStore.getScore }}</h2>
    <span class="text-primary pb-3">Max Score: {{ gameStore.maxHealth }}</span>
    <br />
    <span class="text-success pb-3 h3" v-if="gameStore.getScore >= gameStore.maxHealth"
      >You won!</span
    >
    <span class="text-success pb-3 h3" v-else-if="gameStore.getScore < 0">You lost!</span>
    <div class="row" v-if="gameStore.getScore < gameStore.maxHealth && gameStore.getScore > 0">
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
    <div v-else>
      <button class="form-control btn btn-primary p-4" @click="gameStore.resetScore()">
        Reset Game
      </button>
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
