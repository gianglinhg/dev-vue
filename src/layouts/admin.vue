<template>
  <TheHeader />
  <div>
    <div class="flex flex-row gap-3 mt-3">
      <div class="hidden md:block basis-1/4">
        <a-list bordered class="w-full">
          <TheMenu />
          <template #header>
            <div>Bảng điều khiển</div>
          </template>
        </a-list>
      </div>
      <div class="p-2">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue';
import TheMenu from '@/components/TheMenu.vue';

export default {
  components: {
    TheHeader,
    TheMenu
  }
}
</script>