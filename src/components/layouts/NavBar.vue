<template>
    <v-navigation-drawer>
        <v-sheet 
          class="pa-4 centralizado"
          position="relative">
            <v-avatar 
              class="mb-4"
              size="60" 
              color="surface-variant" 
              ></v-avatar>
            <div >{{ store.usuario.email }}</div>
        </v-sheet>
        <v-divider></v-divider>
        <v-list-item link title="List Item 1"></v-list-item>
        <v-list-item link title="List Item 2"></v-list-item>
        <v-list-item link title="List Item 3"></v-list-item>

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

/**
 * Methods
 */
 const logout = async() => {
    let params = {
      headers: {
          Authorization: `Bearer ${store.usuario.token}`
      }
    };

    await api.get("/logout", params)
    .then((response) => {
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