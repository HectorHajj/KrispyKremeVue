<script setup lang="ts">
import { computed } from 'vue';
import { useAuthStore } from '../store/modules/auth/authStore';
import BaseCard from '../components/base/BaseCard.vue';

const authStore = useAuthStore();
const isAuthenticated = computed(() => authStore.isAuthenticated);
</script>

<template>
  <main class="container">
    <div class="row my-5">
      <BaseCard title="STORE" subtitle="Put an order for donuts!" link="/store" v-if="isAuthenticated" />
      <BaseCard title="DASHBOARD" subtitle="Look at graphs and statistics" link="/dashboard" />
    </div>
  </main>
</template>