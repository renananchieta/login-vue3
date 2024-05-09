<template>
    <div>
      <v-img
        class="mx-auto my-6"
        max-width="228"
        src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
      ></v-img>
  
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >
        <div class="text-subtitle-1 text-medium-emphasis">Login</div>
  
        <v-text-field
          v-model="form.email"
          :readonly="carregando"
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Senha
  
          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Esqueci minha senha</a>
        </div>
  
        <v-text-field
          v-model="form.senha"
          :readonly="carregando"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>
  
        <v-btn
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
          @click="autenticacao()"
          :disable="carregando"
        >
          Log In
        </v-btn>
  
        <v-card-text class="text-center">
          <a
            class="text-blue text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-card>
    </div>
  </template>

<script setup>
import api from '@/plugins/api';
import { useAppStore } from '@/stores/app';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

/**
 * Data
 */
const visible = ref(false);
const carregando = ref(false);
const form = ref({
    email: "admin.user@gmail.com",
    senha: "12345678",
    device_name: ""
});
const token = ref("");

const router = useRouter();
const store = useAppStore();

/**
 * Methods
 */
const autenticacao = async() => {
    carregando.value = true;

    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;
    form.value.device_name = `${platform} - ${userAgent}`;

    await api.post('/autenticacao', form.value)
    .then((response) => {
        token.value = response.data.token;
        store.usuario.token = token.value;
        store.usuario.nome = response.data.usuario.nome;
        store.usuario.email = response.data.usuario.email;
        console.log(store.usuario);

        router.push('/home');
    })
    .catch((error) => {
        console.log(error);
        carregando.value = false;
    })
    .finally(() => {
        carregando.value = false;
    })
}

/**
* Hooks 
*/


</script>