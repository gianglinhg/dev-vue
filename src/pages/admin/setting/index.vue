<template>
  <div>
    Đây là trang setting
  </div>
</template>
<script setup>
import { useMenu } from '@/stores/use-menu';
useMenu().onSelectedKeys(['admin-settings']);
</script>