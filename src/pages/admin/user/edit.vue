<template>
  <form @submit.prevent="updateUsers()">
    <a-card title="Cập nhật tài khoản">
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
                <span :class="{ 'text-red-500': errors.status_id }">Tình trạng</span>
              </label>
            </div>
            <div class="basis-8/12 md:basis-full">
              <a-select v-model:value="status_id" show-search placeholder="Tình trạng" style="width: 100%"
                :options="user_status" :filter-option="filterOption"
                :class="{ 'border-2 border-red-500 rounded-md': errors.status_id }" allow-clear></a-select>
              <div class="w-full"></div>
              <small class="text-red-500" v-if="errors.status_id"> {{ errors.status_id[0] }}</small>
            </div>
          </div>
          <div class="flex space-x-2 mb-2">
            <div class="basis-4/12 md:basic-full text-start md:text-end">
              <label for="">
                <span class="text-red-500 me-1">*</span>
                <span :class="{ 'text-red-500': errors.username }">Tên tài khoản</span>
              </label>
            </div>
            <div class="basis-8/12 md:basis-full">
              <a-input v-model:value="username" placeholder="Tên tài khoản"
                :class="{ 'select-danger': errors.username }" allow-clear />
              <div class="w-full"></div>
              <small class="text-red-500" v-if="errors.username"> {{ errors.username[0] }}</small>
            </div>
          </div>
          <div class="flex space-x-2 mb-2">
            <div class="basis-4/12 md:basic-full text-start md:text-end">
              <label for="">
                <span class="text-red-500 me-1">*</span>
                <span :class="{ 'text-red-500': errors.name }">Họ và tên</span>
              </label>
            </div>
            <div class="basis-8/12 md:basis-full">
              <a-input v-model:value="name" placeholder="Họ và tên" :class="{ 'select-danger': errors.name }"
                allow-clear />
              <div class="w-full"></div>
              <small class="text-red-500" v-if="errors.name"> {{ errors.name[0] }}</small>
            </div>
          </div>
          <div class="flex space-x-2 mb-2">
            <div class="basis-4/12 md:basic-full text-start md:text-end">
              <label for="">
                <span class="text-red-500 me-1">*</span>
                <span :class="{ 'text-red-500': errors.email }"> Email </span>
              </label>
            </div>
            <div class=" basis-8/12 md:basis-full">
              <a-input v-model:value="email" placeholder="Email" :class="{ 'select-danger': errors.email }"
                allow-clear />
              <div class="w-full"></div>
              <small class="text-red-500" v-if="errors.email"> {{ errors.name[0] }}</small>
            </div>
          </div>
          <div class="flex space-x-2 mb-2">
            <div class="basis-4/12 md:basic-full text-start md:text-end">
              <label for="">
                <span class="text-red-500 me-1">*</span>
                <span :class="{ 'text-red-500': errors.department_id }">Phòng ban</span>
              </label>
            </div>
            <div class="basis-8/12 md:basis-full">
              <a-select v-model:value="department_id" show-search placeholder="Phòng ban" style="width: 100%"
                :options="deparments" :filter-option="filterOption" :class="{ 'select-danger': errors.department_id }"
                allow-clear></a-select>
              <div class="w-full"></div>
              <small class="text-red-500" v-if="errors.department_id"> {{ errors.name[0] }}</small>
            </div>
          </div>
          <div class="flex space-x-2 mb-2">
            <div class="basis-4/12 md:basic-full text-start md:text-end">
            </div>
            <div class="basis-8/12 md:basis-full">
              <a-checkbox v-model:checked="change_password">Đổi mật khẩu</a-checkbox>
            </div>
          </div>
          <div class="flex space-x-2 mb-2" v-if="change_password == true">
            <div class="basis-4/12 md:basic-full text-start md:text-end">
              <label for="">
                <span class="text-red-500 me-1">*</span>
                <span :class="{ 'text-red-500': errors.password }">Mật khẩu</span>
              </label>
            </div>
            <div class="basis-8/12 md:basis-full">
              <a-input-password v-model:value="password" placeholder="Mật khẩu"
                :class="{ 'select-danger': errors.password }" allow-clear />
              <div class="w-full"></div>
              <small class="text-red-500" v-if="errors.password"> {{ errors.password[0] }}</small>
            </div>
          </div>
          <div class="flex space-x-2 mb-2" v-if="change_password == true">
            <div class="basis-4/12 md:basic-full text-start md:text-end">
              <label for="">
                <span class="text-red-500 me-1">*</span>
                <span :class="{ 'text-red-500': errors.password_confirmation }">Xác nhận mật khẩu</span>
              </label>
            </div>
            <div class="basis-8/12 md:basis-full">
              <a-input-password v-model:value="password_confirmation" placeholder="Xác nhận mật khẩu"
                :class="{ 'select-danger': errors.password_confirmation }" allow-clear />
              <div class="w-full"></div>
              <small class="text-red-500" v-if="errors.password_confirmation"> {{ errors.name[0] }}</small>
            </div>
          </div>
          <div class="flex space-x-2 mb-2">
            <div class="basis-4/12 md:basic-full text-start md:text-end">
              <label for="">
                <span>Lần đăng nhập gần đây: </span>
              </label>
            </div>
            <div class="basis-8/12 md:basis-full">
              <span>{{ login_at }}</span>
            </div>
          </div>
          <div class="flex space-x-2 mb-2">
            <div class="basis-4/12 md:basic-full text-start md:text-end">
              <label for="">
                <span>Lần đổi mật khẩu mật khẩu: </span>
              </label>
            </div>
            <div class="basis-8/12 md:basis-full">
              {{ change_password_at }}
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
          <a-button type="primary" html-type="submit">
            <span>Lưu</span>
          </a-button>
        </div>
      </div>
    </a-card>
  </form>
</template>
<script>
import { defineComponent, ref, reactive, toRefs } from 'vue';
import { useMenu } from '@/stores/use-menu'
import { useRouter, useRoute } from 'vue-router';
import { message } from 'ant-design-vue';
import dayjs from 'dayjs';


useMenu().onSelectedKeys(['admin-users'])
export default defineComponent({
  setup() {
    const user_status = ref([]);
    const deparments = ref([]);
    const users = reactive({
      username: "",
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      department_id: [],
      status_id: [],
      change_password: false,
      login_at: "",
      change_password_at: "",
    });
    const errors = ref({});

    const route = useRoute();
    const router = useRouter();

    const getUserEdit = () => {
      axios.get(`${url_b}users/${route.params.id}/edit`)
        .then((res) => {
          users.username = res.data.users.username;
          users.name = res.data.users.name;
          users.email = res.data.users.email;
          users.department_id = res.data.users.department_id;
          users.status_id = res.data.users.status_id;

          users.login_at = res.data.users.login_at ? dayjs(res.data.users.login_at).format('DD/MM/YYYY HH:mm') : 'Chưa có lượt đăng nhập';
          users.change_password_at = res.data.users.change_password_at ? dayjs(res.data.users.change_password_at).format('DD/MM/YYYY HH:mm') : 'Chưa có lượt đổi mật khẩu';

          user_status.value = res.data.users_status;
          deparments.value = res.data.departments;
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getUserEdit();

    const updateUsers = () => {
      axios.put(`${url_b}users/${route.params.id}`, users)
        .then((res) => {
          if (res.status == 200) {
            message.success(res.data.message);
            router.push({ name: "admin-users" })
          }
        })
        .catch((err) => {
          errors.value = err.response.data.errors;
        });
    }
    const filterOption = (input, option) => {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };
    return {
      filterOption,
      updateUsers,
      user_status,
      deparments,
      errors,
      ...toRefs(users),
    }
  }

})

</script>