<!-- <template>
  <div class="float-end">
    <button class="btn btn-outline-danger" @click="generateLuckyNumber()">
      <span v-if="luckyNumber === 0">
        Generate Lucky Number <br />
        Range(1-{{ maxNumber }})
      </span>
      <span v-else
        >Lucky Number: {{ luckyNumber }} <br />
        Click to generate new lucky number
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";

let luckyNumber = ref(0);

const maxNumber = inject("maxLuckyNumber");

function generateLuckyNumber() {
  luckyNumber.value = Math.floor(Math.random() * maxNumber.value);
  console.log(luckyNumber.value);
}
</script> -->
