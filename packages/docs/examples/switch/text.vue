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
  <br />
  <qi-switch
    v-model="value1"
    active-text="Open"
    inactive-text="Close"
    @change="handleValue1"
  />
  <br />
  <qi-switch
    v-model="value2"
    active-text="否"
    inactive-text="是"
    style="--qi-switch-on-color: #13ce66; --qi-switch-off-color: #ff4949"
    @change="handleValue2"
  />
</template>
// #endregion snippet
