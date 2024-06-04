// #region snippet
<!--demo片段 🎉-->
<script setup lang="ts">
import { CashOutline } from '@vicons/ionicons5';
import { QiButton } from 'qilin-ui';
</script>
<template>
  <div class="mb-4">
    <qi-button size="large">
      <template #icon>
        <CashOutline />
      </template>
      启林
    </qi-button>
    <qi-button size="large" type="primary" icon-placement="right">
      <template #icon>
        <qi-icon color="#D97E54">
          <CashOutline />
        </qi-icon>
      </template>
      启林
    </qi-button>
  </div>
</template>
// #endregion snippet

<style scoped>
.mb-4 {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  width: 40%;
  margin-top: 1rem;
}
</style>
