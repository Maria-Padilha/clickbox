<template>
  <!-- NAVBAR NO TOPO -->
  <v-app-bar class="py-2 z-10 background-navbar" elevation="1" density="compact">
    <p class="font-weight-bold ml-5 mt-1">ClickBox</p>

    <v-spacer></v-spacer>

    <v-menu :close-on-content-click="false">
      <template v-slot:activator="{ props: menu }">
        <v-tooltip location="top">
          <template v-slot:activator="{ props: tooltip }">
            <v-list-item
                class="w-[200px] truncate whitespace-nowrap overflow-hidden"
                v-bind="mergeProps(menu, tooltip)"
                append-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                subtitle="sandra_a88@gmailcom"
                title="Sandra Adams"
            />
          </template>
          <span>Menu</span>
        </v-tooltip>
      </template>

      <v-card class="mx-auto w-[300px]">
        <v-list class="background-primary py-3" :items="items" nav density="compact">
          <v-list-subheader>
            <p class="text-sm font-medium color-btn">Seja bem vindo, <span class="font-normal">Sandra Adams</span></p>
            <span class="texto-color-primary">Painel de usuário Admin</span>
          </v-list-subheader>

          <v-divider thickness="2" class="my-3"/>

          <v-list-item v-for="(item, i) in items" :key="i" :value="item" :to="item.route">
            <template v-slot:prepend><v-icon size="20px" :icon="item.icon" /></template>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
  <!-- FIM NAVBAR NO TOPO -->
</template>

<script setup>
import {ref, mergeProps} from 'vue'

// links do menu perfil
const items = ref([
  { text: 'Visualizar seu Perfil', icon: 'mdi-account-outline', route: '/paginas/perfil' },
  { text: 'Sair', icon: 'mdi-logout', route: '/login' },
])
</script>