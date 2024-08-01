<template>
  <div>
    <div class="flex flex-row items-center bg-green-700 p-4">
      <div class="basis-1/12 sm:hidden flex items-center justify-center">
        <span @click="showDrawer()">
          <i class="fa-solid fa-align-justify"></i>
        </span>
      </div>
      <div class="md:justify-start basis-3/4 md:basis-full flex items-center justify-center">
        <img src="../assets/logo.png" alt="Logo" width="55" />
      </div>
      <div class="hidden md:flex items-center md:justify-end">Admin</div>
      <div class="flex-1 sm:hidden flex items-center justify-center">
        <span @click="showDrawerUser()">
          <i class="fa-solid fa-user"></i>
        </span>
      </div>
    </div>
  </div>
  <a-drawer v-model:open="visable" class="custom-class" root-class-name="root-class-name" title="Danh mục"
    placement="left">
    <TheMenu />
  </a-drawer>
  <a-drawer v-model:open="visable_user" class="custom-class" root-class-name="root-class-name" title="Admin"
    placement="right">
    <p>right...</p>
    <p>right...</p>
    <p>right...</p>
  </a-drawer>
</template>

<!-- <script setup>
import { ref } from 'vue';
const visable = ref(false);
const visable_user = ref(false);
// const afterOpenChange = bool => {
//   console.log('open', bool);
// };
const showDrawer = () => {
  visable.value = true;
};
const showDrawerUser = () => {
  visable_user.value = true;
};
</script> -->
<script>
import { defineComponent, ref } from 'vue'
import TheMenu from './TheMenu.vue'

export default defineComponent({
  setup() {
    const visable = ref(false)
    const visable_user = ref(false)
    // const afterOpenChange = bool => {
    //   console.log('open', bool);
    // };
    const showDrawer = () => {
      visable.value = true
    }
    const showDrawerUser = () => {
      visable_user.value = true
    }
    return {
      visable,
      visable_user,
      showDrawer,
      showDrawerUser
    }
  },
  components: {
    TheMenu
  }
})
</script>
