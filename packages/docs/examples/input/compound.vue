// #region snippet
<!--demo片段 🎉-->
<script lang="ts" setup>
import { PersonOutline } from '@vicons/ionicons5';
import { KeyOutline } from '@vicons/ionicons5';
import { ref } from 'vue';
const input1 = ref('');
const input2 = ref('');
</script>

<template>
  <div class="box">
    <qi-input v-model="input1" style="width: 300px" placeholder="Please input">
      <template #prepend> Https:// </template>
    </qi-input>
  </div>
  <div class="box">
    <qi-input v-model="input2" style="width: 300px" placeholder="Please input">
      <template #append> .edu.cn </template>
    </qi-input>
  </div>
</template>
// #endregion snippet
<style scoped>
.box {
  margin-top: 10px;
}
</style>
