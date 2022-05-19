<template>
  <div class="input">
    <input type="text" placeholder="Pesquisar..." v-model="searchQuery" />
    <span class="input_clear" @click="clearValue()">&times;</span>
  </div>
</template>
<script setup lang="ts">
import { computed, defineComponent, defineProps, defineEmits } from 'vue';

defineComponent({ name: 'SearchInput' });

const emits = defineEmits(['input']);

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
});

const searchQuery = computed({
  get() {
    return props.value;
  },
  set(val) {
    emits('input', val);
  },
});

const clearValue = () => {
  throw new Error('Not implemented');
};
</script>
<style scoped>
.input {
  display: flex;
  width: 100%;
  position: relative;
}

.input input {
  width: 100%;
  padding: 8px 22px 8px 10px;
  font-size: 1rem;
  border: 1px solid #e3e3e3;
  border-radius: 6px;
  outline: none;
}

.input input:focus {
  border-color: rgb(109, 61, 255);
}

.input .input_clear {
  position: absolute;
  top: 6px;
  right: 6px;
  font-size: 18px;
  color: red;
}

.input .input_clear:houver {
  cursor: pointer;
}
</style>
