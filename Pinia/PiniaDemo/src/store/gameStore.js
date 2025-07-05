import { defineStore } from "pinia";

export const useGameStore = defineStore("gameStore", {
  state: () => ({
    score: 50,
    maxHealth: 100,
    maxAttack: 30,
    maxDefense: 10,
  }),
  getters: {
    //getters should be used when you want to return smth or get data, for
    //updating - Pinia actions are better!!
    getScore() {
      return this.score;
    },
  },
  actions: {
    setNextAttack() {
      let attack = Math.floor(Math.random() * this.maxAttack) + 1;
      console.log("attack:", attack);
      this.score += attack;
    },
    setNextDefense() {
      let defense = Math.floor(Math.random() * this.maxDefense) + 1;
      console.log("defense:", defense);
      this.score -= defense;
    },
  },
});
