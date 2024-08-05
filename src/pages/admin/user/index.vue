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
        <template v-if="column.key === 'action'">
          <router-link :to="{ name: 'admin-user-edit', params: { id: record.id } }">
            <a-button type="primary" class="me-2 md:mb-2">
              <i class="fa-solid fa-pen-to-square"></i>
            </a-button>
          </router-link>
          <a-button type="primary" v-if="record.id != 1" danger @click="deleteUsers(record.id)">
            <i class="fa-solid fa-trash-can"></i>
          </a-button>
        </template>
      </template>
    </a-table>
  </a-card>
</template>

<script setup>
import { useMenu } from '@/stores/use-menu'
import axios from 'axios';
import { ref, createVNode } from 'vue';
import { Modal } from 'ant-design-vue';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';

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
      users.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    })
};

const deleteUsers = (id) => {
  Modal.confirm({
    content: 'Bạn có chắc chắn ??',
    icon: createVNode(ExclamationCircleOutlined),
    onOk() {
      axios.delete(`${url_b}users/${id}`)
        .then((res) => {
          if (res.status == 200) {
            message.success(res.data)
            getUsers();
          }
        })
        .catch((err) => {
          console.log(err);
          message.warning(res.data)
        });
    },
    cancelText: 'Hủy',
    onCancel() {
      Modal.destroyAll();
    },
  });

}
getUsers();
</script>
