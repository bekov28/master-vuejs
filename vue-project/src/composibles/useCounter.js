import { initCustomFormatter, ref } from "vue";

export function useCounter(initialValue = 0, step = 1) {
  //increase by 1 each time
  const count = ref(initialValue);

  const increment = () => {
    count.value += step;
  };

  const decrement = () => {
    count.value -= step;
  };

  return { count, increment, decrement }; //always return in objects
}
