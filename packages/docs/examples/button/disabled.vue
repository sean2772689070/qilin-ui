// #region snippet
<!--demo片段 🎉-->
<template>
  <div class="mb-4">
    <qi-button disabled>Default</qi-button>
    <qi-button type="primary" disabled>Primary</qi-button>
    <qi-button type="success" disabled>Success</qi-button>
    <qi-button type="info" disabled>Info</qi-button>
    <qi-button type="warning" disabled>Warning</qi-button>
    <qi-button type="danger" disabled>Danger</qi-button>
  </div>

  <div class="mb-4">
    <qi-button plain disabled>Plain</qi-button>
    <qi-button type="primary" plain disabled>Primary</qi-button>
    <qi-button type="success" plain disabled>Success</qi-button>
    <qi-button type="info" plain disabled>Info</qi-button>
    <qi-button type="warning" plain disabled>Warning</qi-button>
    <qi-button type="danger" plain disabled>Danger</qi-button>
  </div>
</template>
// #endregion snippet

<script setup lang="ts">
import { QiButton } from 'qilin-ui';
</script>
<style scoped>
.mb-4 {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
}
</style>
