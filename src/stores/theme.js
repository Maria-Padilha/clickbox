import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
    const darkMode = ref(false);
    const brightness = ref(1);

    return {
        darkMode,
        brightness,
    };
}, {
    persist: true
});
