<template>
  <div>Đây là trang quản lý user</div>
</template>

<script setup>
import { useMenu } from '@/stores/use-menu'
useMenu().onSelectedKeys(['admin-users'])
</script>
