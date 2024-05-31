// #region snippet
<!--demo片段 🎉-->
<script setup lang="ts">
import { ref } from 'vue';
import { TreeOptions } from '@qilin-ui/components/tree';

const createData = (level = 4, baseKey = ''): TreeOptions[] | undefined => {
  if (!level) return undefined;
  return Array.from({ length: 6 - level }, (_, index) => {
    const key = '' + baseKey + level + index;
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    };
  });
};

const createLabel = (level: number): string => {
  if (level === 4) return '道生一';
  if (level === 3) return '一生二';
  if (level === 2) return '二生三';
  if (level === 1) return '三生万物';
  return '';
};

const data = createData();
const defaultExpandedKeys = ref(['40', '41']);
</script>

<template>
  <qi-tree :data="data" :default-expanded-keys="defaultExpandedKeys">
    <template #default="{ node }">
      <span>{{ node.key }} - 启林</span>
    </template>
  </qi-tree>
</template>
// #endregion snippet

<style scoped></style>
