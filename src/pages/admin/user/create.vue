<template>
  <a-card title="Tạo mới tài khoản">
    <div class="flex flex-col gap-5 md:flex-row">
      <div class="md:basis-3/12">
        <div class="flex flex-col justify-center items-center gap-2 w-full">
          <a-avatar shape="square" :size="200">
            <template #icon>
              <img src="../../../assets/user.png" alt="Avatar">
            </template>
          </a-avatar>
          <div class="w-full flex justify-center">
            <a-button type="primary">
              <i class="fa-solid fa-plus me-2"></i>
              <span>Chọn ảnh</span>
            </a-button>
          </div>
        </div>
      </div>
      <div class="md:basis-7/12">
        <div class="flex space-x-2 mb-2">
          <div class="basis-4/12 md:basic-full text-start md:text-end">
            <label for="">
              <span class="text-red-500 me-1">*</span>
              <span>Tình trạng</span>
            </label>
          </div>
          <div class="basis-8/12 md:basis-full">
            <a-select show-search placeholder="Tình trạng" style="width: 100%" :options="user_status"
              :filter-option="filterOption" allow-clear></a-select>
          </div>
        </div>
        <div class="flex space-x-2 mb-2">
          <div class="basis-4/12 md:basic-full text-start md:text-end">
            <label for="">
              <span class="text-red-500 me-1">*</span>
              <span>Tên tài khoản</span>
            </label>
          </div>
          <div class="basis-8/12 md:basis-full">
            <a-input placeholder="Tên tài khoản" allow-clear />
          </div>
        </div>
        <div class="flex space-x-2 mb-2">
          <div class="basis-4/12 md:basic-full text-start md:text-end">
            <label for="">
              <span class="text-red-500 me-1">*</span>
              <span>Họ và tên</span>
            </label>
          </div>
          <div class="basis-8/12 md:basis-full">
            <a-input placeholder="Họ và tên" allow-clear />
          </div>
        </div>
        <div class="flex space-x-2 mb-2">
          <div class="basis-4/12 md:basic-full text-start md:text-end">
            <label for="">
              <span class="text-red-500 me-1">*</span>
              <span>Email</span>
            </label>
          </div>
          <div class="basis-8/12 md:basis-full">
            <a-input placeholder="Email" allow-clear />
          </div>
        </div>
        <div class="flex space-x-2 mb-2">
          <div class="basis-4/12 md:basic-full text-start md:text-end">
            <label for="">
              <span class="text-red-500 me-1">*</span>
              <span>Phòng ban</span>
            </label>
          </div>
          <div class="basis-8/12 md:basis-full">
            <a-select show-search placeholder="Phòng ban" style="width: 100%" :options="deparments"
              :filter-option="filterOption" allow-clear></a-select>
          </div>
        </div>
        <div class="flex space-x-2 mb-2">
          <div class="basis-4/12 md:basic-full text-start md:text-end">
            <label for="">
              <span class="text-red-500 me-1">*</span>
              <span>Mật khẩu</span>
            </label>
          </div>
          <div class="basis-8/12 md:basis-full">
            <a-input-password placeholder="Mật khẩu" allow-clear />
          </div>
        </div>
        <div class="flex space-x-2 mb-2">
          <div class="basis-4/12 md:basic-full text-start md:text-end">
            <label for="">
              <span class="text-red-500 me-1">*</span>
              <span>Xác nhận mật khẩu</span>
            </label>
          </div>
          <div class="basis-8/12 md:basis-full">
            <a-input-password placeholder="Xác nhận mật khẩu" allow-clear />
          </div>
        </div>
      </div>
    </div>
    <div class="md:flex md:justify-end">
      <div class="grid md:block space-y-1 md:space-x-2">
        <a-button>
          <router-link :to="{ name: 'admin-users' }">
            <span>Hủy</span>
          </router-link>
        </a-button>
        <a-button type="primary" @click="createUser()">
          <span>Lưu</span>
        </a-button>
      </div>
    </div>
  </a-card>
</template>
<script>
import { defineComponent } from 'vue';
import { useMenu } from '@/stores/use-menu'
import { ref } from 'vue';


export default defineComponent({
  setup() {
    useMenu().onSelectedKeys(['admin-users'])

    const user_status = ref([]);
    const deparments = ref([]);

    const getUserCreate = () => {
      axios.get(url_b + 'users/create')
        .then((res) => {
          user_status.value = res.data.users_status;
          deparments.value = res.data.departments;
        })
        .catch((err) => {
          console.log(err);
        });
    }
    const filterOption = (input, option) => {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };
    getUserCreate();
    return {
      filterOption,
      user_status,
      deparments
    }
  },
});
</script>