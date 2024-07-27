<template>
  <a-menu v-model:openKeys="state.openKeys" v-model:selectedKeys="state.selectedKeys" mode="inline"
    :items="items"></a-menu>
</template>
<script setup>
import { reactive, watch, h } from 'vue';
import { RouterLink } from 'vue-router';
import { useMenu } from '@/stores/use-menu.js';
import {
  SettingOutlined,
  UserOutlined,
  TagOutlined,
} from '@ant-design/icons-vue';

const state = useMenu();

const items = reactive([
  {
    key: 'admin-users',
    icon: () => h(UserOutlined),
    label: h(RouterLink, { to: { name: 'admin-users' } }, { default: () => 'Tài khoản' }),
  },
  {
    key: 'admin-roles',
    icon: () => h(TagOutlined),
    label: h(RouterLink, { to: { name: 'admin-roles' } }, { default: () => 'Vai trò' }),
  },
  {
    key: 'admin-settings',
    icon: () => h(SettingOutlined),
    label: h(RouterLink, { to: { name: 'admin-settings' } }, { default: () => 'Cài đặt' }),
  },
]);
</script>