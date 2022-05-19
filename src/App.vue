<template>
  <div class="componet-box">
    <h1>Introdução ao vue test utils</h1>
    <search-input :value="search" />
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import SearchInput from './components/search-input/index.vue';

defineComponent({
  name: 'App',
});

const search = '';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  width: 100%;
  height: 100vh;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.component-box {
  width: 30%;
}
</style>
