<template>
  <v-app :theme="themeStore.darkMode ? 'dark' : ''">
    <v-main class="background-primary">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
import {useThemeStore} from "@/stores/theme";
import {watch} from "vue";

const themeStore = useThemeStore();

watch(
    () => themeStore.darkMode,
    (isDark) => {
      const el = document.documentElement
      el.classList.toggle('dark', isDark)
      el.classList.toggle('light', !isDark)
    },
    { immediate: true }
)
</script>
