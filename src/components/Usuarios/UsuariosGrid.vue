<template>
   <v-container>
      <Pesquisa
      :carregando="carregando"
      subtitulo="Pesquisa de usuários do sistema"
      titulo="Usuários"
      @pesquisar="pesquisar">
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="descricao"
            append-inner-icon="mdi-file-search-outline"
            label="Descrição"
            variant="outlined"
            density="compact"
          />
        </v-col>
      </v-row>
    </Pesquisa>
   </v-container>
</template>

<script setup>
import api from '@/plugins/api';
import { ref } from 'vue';

/**
 * Data
 */
const descricao = ref('');
const carregando = ref(false);

/**
 * Methods
 */
 const pesquisar = () => {
  carregando.value = true;

  let params = {
      headers: {
         Authorization: `Bearer ${localStorage.getItem('Authorization')}`
      },
      params: {
         nome: descricao.value,
    }
    };

   api.get('/admin/usuarios/grid', params)
   .then((response) => {
      console.log(response.data);
   })
   .catch((error) => {
      console.log(error);
   })
   .finally(() => {
      carregando.value = false;
   })
}
</script>