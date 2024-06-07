<script setup lang="ts">
import { QiText } from 'qilin-ui';
import 'qilin-ui/dist/theme/text.css';
</script>

<template>
  <div style="width: 100px">
    <qi-text type="warning" size="large" truncated>
      这是一个多行文本示例，如果文本内容超过了三行，那么超出的部分将会被
    </qi-text>
  </div>
</template>

<style scoped></style>
