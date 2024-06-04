// #region snippet
<!--demo片段 🎉-->
<script setup lang="ts">
import { QiIcon } from 'qilin-ui';
</script>
<!-- 使用 qi-icons 为 SVG 图标提供属性 -->
<template>
  <div>
    <qi-icon icon="ghost" size="2x" />
    <qi-icon icon="ghost" size="2x" />
    <qi-icon icon="ghost" size="2x" />
  </div>
  <div>
    <qi-icon icon="ghost" size="3x" color="#AAE4E6" />
    <qi-icon icon="ghost" size="3x" color="#83F7D6" />
    <qi-icon icon="ghost" size="3x" color="#FCD590" />
  </div>
</template>
// #endregion snippet

<style scoped>
.qi-icon {
  margin: 0 10px;
}
</style>
