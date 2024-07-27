<template>
  <div>
    Đây là trang quản lý role
  </div>
</template>
<script setup>
import { useMenu } from '@/stores/use-menu';
useMenu().onSelectedKeys(['admin-roles']);
</script>