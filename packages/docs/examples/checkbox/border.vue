// #region snippet
<!--demo片段 🎉-->
<script lang="ts" setup>
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(false);
const checked5 = ref(false);
const checked6 = ref(false);
const checked7 = ref(false);
const checked8 = ref(false);
</script>

<template>
  <div class="box">
    <qi-checkbox
      v-model="checked1"
      label="Option 1"
      size="large"
      :border="true"
    />
    <qi-checkbox
      v-model="checked2"
      label="Option 2"
      size="large"
      :border="true"
    />
  </div>
  <div class="box">
    <qi-checkbox v-model="checked3" label="Option 1" :border="true" />
    <qi-checkbox v-model="checked4" label="Option 2" :border="true" />
  </div>
  <div class="box">
    <qi-checkbox
      v-model="checked5"
      label="Option 1"
      size="small"
      :border="true"
    />
    <qi-checkbox
      v-model="checked6"
      label="Option 2"
      size="small"
      :border="true"
    />
  </div>
  <div class="box">
    <qi-checkbox
      v-model="checked7"
      label="Option 1"
      disabled
      size="small"
      :border="true"
    />
    <qi-checkbox
      v-model="checked8"
      label="Option 2"
      disabled
      size="small"
      :border="true"
    />
  </div>
</template>
// #endregion snippet

<style scoped>
.box {
  display: flex;
  align-items: center;
  label {
    margin-right: 30px;
  }
}
</style>
