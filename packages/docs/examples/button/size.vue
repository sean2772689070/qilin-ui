// #region snippet
<!--demo片段 🎉-->
<template>
  <div class="mb-4">
    <qi-button size="large">large</qi-button>
    <qi-button>medium</qi-button>
    <qi-button size="small">small</qi-button>
  </div>
</template>
// #endregion snippet

<script setup lang="ts">
import { QiButton } from 'qilin-ui';
</script>
<style scoped>
.mb-4 {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  width: 40%;
  margin-top: 1rem;
}
</style>
