<template>
    <v-navigation-drawer class="float-left">
        <v-sheet 
          class="pa-4 centralizado"
          position="relative">
            <v-avatar 
              class="mb-4"
              size="60" 
              color="surface-variant" 
              ></v-avatar>
            <div >{{ store.usuario.nome }}</div>
            <div >{{ store.usuario.email }}</div>
        </v-sheet>
        <v-divider></v-divider>
        <v-list density="compact">
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :value="item"
                color="primary"
            >
                <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
                </template>

                <v-list-item-title v-text="item.text" @click="router.push(item.to)"></v-list-item-title>
            </v-list-item>
        </v-list>

        <template v-slot:append>
            <v-footer>
                <v-btn
                  block
                  class="mx-auto"
                  variant="tonal"
                  @click="logout()">
                    <v-icon icon="mr-1 mdi mdi-exit-to-app" />
                    Sair
                </v-btn>
            </v-footer>
        </template>
    </v-navigation-drawer>

    <v-app-bar :elevation="2">
        <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Estudos App</v-app-bar-title>
    </v-app-bar>
</template>

<script setup>
import api from '@/plugins/api';
import { useAppStore } from '@/stores/app';
import { useRouter } from 'vue-router';

/**
 * Data
 */
const store = useAppStore();
const router = useRouter();
const items = ref([
    { text: 'Home', icon: 'mdi-home', to: "/home" },
    { text: 'Audience', icon: 'mdi-account', to: "/audience" },
    { text: 'Conversions', icon: 'mdi-flag', to: "/conversions" },
]);

/**
 * Methods
 */
const logout = async() => {
    store.usuario.nome = '';

    let params = {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('Authorization')}`
      }
    };

    await api.get("/logout", params)
    .then(() => {
        localStorage.clear();
        router.push("/login");
    })
    .catch((error) => {
        console.log(error);
        alert("falha de comunicação com o servidor.")
    });
}
</script>

<style scoped>
.centralizado{
  text-align: center;
}
</style>