<template>
  <button @click="increment">++</button>
  <span>{{ count }}</span>
  <button @click="decrement">--</button>
</template>

<script setup>
import { useCounter } from "@/composibles/useCounter.js";

const { count, increment, decrement } = useCounter();
</script>
