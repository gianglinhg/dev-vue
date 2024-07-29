<template>
  <a-card title="Tạo mới tài khoản">
    <div class="flex flex-col gap-5 md:flex-row">
      <div class="md:basis-4/12">
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
      <div class="flex md:basis-8/12">
        <div class="basis-3/12 md:basic-full">
          <label for="">
            <span class="text-red-500 me-1 hidden">123</span>
            <span>Tình trạng</span>
          </label>
        </div>
        <div class="basis-9/12 md:basis-full">
          <a-select show-search placeholder="Tình trạng" style="width: 100%" :options="[]"
            :filter-option="[]"></a-select>
        </div>
      </div>
    </div>
  </a-card>
</template>
<script>
import { defineComponent } from 'vue';
import { useMenu } from '@/stores/use-menu'
// import { ref } from 'vue';


export default defineComponent({
  setup() {
    useMenu().onSelectedKeys(['admin-users'])
    return {

    }
  }
});
</script>