// #region snippet
<!--demo片段 🎉-->
<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(true);
const value2 = ref(true);

const handleValue1 = () => {
  value1.value = !value1.value;
};

const handleValue2 = () => {
  value2.value = !value2.value;
};
</script>

<template>
  <qi-switch v-model="value1" disabled @change="handleValue1" />
  <qi-switch v-model="value2" @change="handleValue2" />
</template>
// #endregion snippet
