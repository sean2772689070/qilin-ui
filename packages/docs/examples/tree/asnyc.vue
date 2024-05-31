// #region snippet
<!--demo片段 🎉-->
<script setup lang="ts">
import { ref } from 'vue';
import { TreeOptions } from '@qilin-ui/components/tree';

const createData = () => {
  return [
    {
      label: nextLabel(),
      key: 1,
      isLeaf: false
    },
    {
      label: nextLabel(),
      key: 2,
      isLeaf: false
    }
  ];
};

const nextLabel = (currentLabel?: string | number): string => {
  if (!currentLabel) return 'Out of Tao, One is born';
  if (currentLabel === 'Out of Tao, One is born') return 'Out of One, Two';
  if (currentLabel === 'Out of One, Two') return 'Out of Two, Three';
  if (currentLabel === 'Out of Two, Three') {
    return 'Out of Three, the created universe';
  }
  if (currentLabel === 'Out of Three, the created universe') {
    return 'Out of Tao, One is born';
  }
  return '';
};
const dataRef = ref(createData());
const handleLoad = (node: TreeOptions) => {
  return new Promise<TreeOptions[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          label: nextLabel(node.label),
          key: node.key + nextLabel(node.label),
          isLeaf: false
        }
      ]);
    }, 1000);
  });
};
</script>

<template>
  <qi-tree :data="dataRef" :on-load="handleLoad" />
</template>
// #endregion snippet

<style scoped></style>
