// #region snippet
<!--demo片段 🎉-->
<script setup lang="ts">
import { ref } from 'vue';

const value1 = ref(true);

const handleValue1 = () => {
  value1.value = !value1.value;
};
</script>

<template>
  <qi-switch v-model="value1" @change="handleValue1">
    <template #active-action>
      <span class="custom-active-action">T</span>
    </template>
    <template #inactive-action>
      <span class="custom-inactive-action">F</span>
    </template>
  </qi-switch>
</template>
// #endregion snippet
