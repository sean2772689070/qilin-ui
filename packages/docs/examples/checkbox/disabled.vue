// #region snippet
<!--demo片段 🎉-->
<script lang="ts" setup>
import { ref } from 'vue';
const checked1 = ref(false);
const checked2 = ref(true);
</script>

<template>
  <qi-checkbox v-model="checked1" disabled>Disabled</qi-checkbox>
  <qi-checkbox v-model="checked2">Not disabled</qi-checkbox>
</template>
// #endregion snippet

<style scoped>
label {
  margin-right: 30px;
}
</style>
