<template>
    <v-container>
        <Pesquisa
        :carregando="carregando"
        subtitulo="Pesquisa de estudantes"
        titulo="Estudantes"
        @pesquisar="pesquisar">
            <v-row>
                <v-col cols="12" md="3">
                    <v-text-field
                    v-model="nome"
                    append-inner-icon="mdi-file-search-outline"
                    label="Nome"
                    variant="outlined"
                    density="compact"/>
                </v-col>
                <v-col cols="12" md="3">
                    <v-text-field
                    v-model="nome_mae"
                    append-inner-icon="mdi-file-search-outline"
                    label="Nome da mãe"
                    variant="outlined"
                    density="compact"/>
                </v-col>
                <v-col cols="12" md="3">
                    <v-text-field
                    v-model="cpf"
                    append-inner-icon="mdi-file-search-outline"
                    label="cpf do aluno"
                    variant="outlined"
                    density="compact"/>
                </v-col>
                <v-col cols="12" md="3">
                    <v-text-field
                    v-model="cpf_mae"
                    append-inner-icon="mdi-file-search-outline"
                    label="cpf_mae"
                    variant="outlined"
                    density="compact"/>
                </v-col>
            </v-row>
      </Pesquisa>
      <br>
      <EstudantesTable
      :headers="headers"
      :items="items"
      @deletar="deletarDados"
      @editar="editarDados"
      @salvar="salvarDados" />
    </v-container>
 </template>
 
 <script setup>
import api from '@/plugins/api';
import { ref } from 'vue';

const nome = ref('');
const nome_mae = ref('');
const cpf = ref('');
const cpf_mae = ref('');
const carregando = ref(false);
const items = ref([]);
const headers = ref([
   {title: "Nome", key: "nome"},
   {title: "Nascimento", key: "dt_nascimento"},
   {title: "Mãe", key: "nome_mae"},
   {title: "Ações", align: "end",key: "actions"},
]);

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
         nome: nome.value,
         nome_mae: nome_mae.value,
         cpf: cpf.value,
         cpf_mae: cpf_mae.value,
      }
   };

   api.get('/estudantes', params)
   .then((response) => {
      items.value = response.data;
   })
   .catch((error) => {
      console.log(error);
   })
   .finally(() => {
      carregando.value = false;
   })
};

const salvarDados = (item) => {
   let params = {
      headers: {
         Authorization: `Bearer ${localStorage.getItem('Authorization')}`
      },
      params: {
         nome: descricao.value,
      }
   };

   carregando.value = true;
   
   if (item.id) {
      editarDados(item);
   } else {
      api.post('/estudantes', item, params)
      .then((response) => {
         items.value.push(response.data);
      })
      .catch((error) => {
         console.log(error);
      })
      .finally(() => {
         carregando.value = false;
      })
   }
}

const editarDados = (item) => {
  let params = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('Authorization')}`
    },
  }

  carregando.value = true;

  api.put(`/estudantes/${item.id}`, item, params)
   .then((response) => {
      items.value = items.value.map((dado) => {
         if (dado.id === item.id) {
            dado = response.data;
         }
         return dado
      })
   })
   .catch((error) => {
      console.log(error);
   })
   .finally(() => {
      carregando.value = false;
   })
}

const deletarDados = (item) => {
  carregando.value = true;

  api.delete(`/estudantes${item.id}`)
    .then((response) => {
      items.value.splice(items.value.indexOf(item), 1);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      carregando.value = false;
    });
}

onMounted(() => {
   pesquisar();
})
 </script>