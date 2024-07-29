<template>
  <a-card title="Tài khoản" class="w-full">
    <div class="flex justify-end">
      <a-button type="primary" :size="size">
        <template #icon>
          <router-link :to="{ name: 'admin-user-create' }">
            <i class="fa-solid fa-plus"></i>
          </router-link>
        </template>
      </a-button>
    </div>
    <a-table :dataSource="users" :columns="columns" :scroll="{ x: 426 }" :expand-column-width="100">
      <template #bodyCell="{ column, index, record }">
        <template v-if="column.key === 'index'">
          <span>{{ index + 1 }}</span>
        </template>
        <template v-if="column.key === 'status'">
          <span v-if="record.status_id == 1" class="text-blue-500">
            {{ record.status }}
          </span>
          <span v-else-if="record.status_id == 2" class="text-red-500">
            {{ record.status }}
          </span>
        </template>
      </template>
    </a-table>
  </a-card>
</template>

<script setup>
import { useMenu } from '@/stores/use-menu'
import { ref } from 'vue';

useMenu().onSelectedKeys(['admin-users'])

const users = ref([]);
const columns = [
  {
    title: '#',
    key: 'index',
  },
  {
    title: 'Tài khoản',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Họ tên',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Phòng ban',
    dataIndex: 'department',
    key: 'department',
    responsive: ['sm']
  },
  {
    title: 'Vai trò',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Công cụ',
    key: 'action',
    fixed: 'right',
  },

]

const getUsers = () => {
  axios.get(url_b + 'users')
    .then((response) => {
      console.log(response);
      users.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log(users);
    });
};
getUsers();
</script>
