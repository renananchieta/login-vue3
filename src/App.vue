<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { onBeforeUnmount } from 'vue';
import { onBeforeMount } from 'vue';

const memorizarPagina = (e) => {
  if (window.location.pathname !== '/login') {
    //evita loop infinito na tela de autenticacao
    window.sessionStorage.url = window.location.pathname
  }
  e.preventDefault()
}

onBeforeMount(() => {
  window.addEventListener('beforeunload', memorizarPagina)
});

onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', memorizarPagina)
});
</script>
