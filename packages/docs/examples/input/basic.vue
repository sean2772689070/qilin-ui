// #region snippet
<!--demo片段 🎉-->
<script lang="ts" setup>
import { ref } from 'vue';
const input = ref('');
</script>

<template>
  <qi-input v-model="input" style="width: 240px" placeholder="Please input" />
  <div>输入值: {{ input }}</div>
</template>
// #endregion snippet
<style scoped>
div {
  margin-top: 10px;
}
</style>
