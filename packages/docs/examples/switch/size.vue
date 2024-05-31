// #region snippet
<!--demo片段 🎉-->
<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(true);

const handleValue = () => {
  value.value = !value.value;
};
</script>

<template>
  <qi-switch
    v-model="value"
    size="large"
    active-text="Open"
    inactive-text="Close"
    @change="handleValue"
  />
  <br />
  <qi-switch
    v-model="value"
    active-text="Open"
    inactive-text="Close"
    @change="handleValue"
  />
  <br />
  <qi-switch
    v-model="value"
    size="small"
    active-text="Open"
    inactive-text="Close"
    @change="handleValue"
  />
</template>
// #endregion snippet
