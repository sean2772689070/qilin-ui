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
    <qi-input v-model="input1" style="width: 240px" placeholder="请输入用户名">
      <template #prefix>
        <qi-icon color="#AFB1B7">
          <person-outline></person-outline>
        </qi-icon>
      </template>
    </qi-input>
  </div>
  <div class="box">
    <qi-input v-model="input2" style="width: 240px" placeholder="请输入密码">
      <template #prefix>
        <qi-icon color="#AFB1B7">
          <key-outline></key-outline>
        </qi-icon>
      </template>
    </qi-input>
  </div>
</template>
// #endregion snippet
<style scoped>
.box {
  margin-top: 10px;
}
</style>
