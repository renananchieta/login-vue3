<template>
<v-data-table
    :headers="headers"
    :items="items"
    density="comfortable"
    hover
    color="#F4511E"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Listagem de estudantes</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="1024px"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              class="mb-2"
              color="primary"
              dark
              v-bind="props"
              variant="elevated"
            >
              Cadastrar
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-form @submit.prevent="setSalvar()">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                      v-model="editedItem.nome"
                      label="Nome completo"
                      variant="outlined"
                      density="compact"
                      required/>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-text-field
                      v-model="editedItem.cpf"
                      label="CPF"
                      placeholder="000.000.000-00"
                      variant="outlined"
                      density="compact"
                      required/>
                    </v-col>
                    <v-col cols="12" md="3">
                      <v-text-field
                      v-model="editedItem.dt_nascimento"
                      type="date"
                      label="Data de nascimento"
                      variant="outlined"
                      density="compact"
                      required/>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                      v-model="editedItem.nome_mae"
                      label="Nome da mãe"
                      variant="outlined"
                      density="compact"
                      required/>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                      v-model="editedItem.cpf_mae"
                      label="CPF da mãe"
                      placeholder="000.000.000-00"
                      variant="outlined"
                      density="compact" 
                      required/>
                    </v-col>
                  </v-row>
                </v-form>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red"
                variant="elevated"
                @click="close"
              >
                CANCELAR
              </v-btn>
              <v-btn
                class="ma-2"
                color="blue-darken-1"
                variant="elevated"
                type="submit"
              >
                {{buttonTitle}}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        class="me-2"
        size="small"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary">
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script setup>
import { computed, nextTick, ref, watch } from "vue";

const props = defineProps({
    headers: {
      default: () => [],
      required: true,
    },
    items: {
      default: () => [],
      required: true,
    },
})

/**
 * Data
 */
const dialog = ref(false);
const dialogDelete = ref(false);
const editedIndex = ref(-1);
const editedItem = ref({
  nome: "",
  cpf: "",
  nome_mae: "",
  cpf_mae: "",
  dt_nascimento: ""
});
const defaultItem = ref({
  nome: "",
  cpf: "",
  nome_mae: "",
  cpf_mae: "",
  dt_nascimento: ""
});

/**
 * Computed
 */
const formTitle = computed(() => editedIndex.value === -1 ? 'Novo' : 'Edição');
const buttonTitle = computed(() => editedIndex.value === -1 ? 'SALVAR' : 'ALTERAR');

/**
 * Watch
 */
watch(() => dialog,
  (value) => {
    return value || close();
});

watch(() => dialogDelete,
  (value) => {
    return value || closeDelete();
});

/**
 * Emits
 */
const emit = defineEmits(["salvar", "editar", "deletar"]);
const setSalvar = () => {
    emit("salvar", editedItem.value);
    close();
};

/**
 * Methods
 */
const editItem = (item) => {
    // emit("editar", item);
    console.log(item.raw);
    editedIndex.value = 1;
    editedItem.value = Object.assign({}, item);
    dialog.value = true;
};

let itemASerDeletado = {};
const deleteItem = (item) => {
  itemASerDeletado = item;
  dialogDelete.value = true;
};

const close = () => {
  dialog.value = false;
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem.value);
    editedIndex.value = -1;
  });
};

const closeDelete = () => {
  dialogDelete.value = false;
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem.value);
    editedIndex.value = -1;
  });
};

const deleteItemConfirm = () => {
  emit("deletar", itemASerDeletado);
  closeDelete();
};

</script>