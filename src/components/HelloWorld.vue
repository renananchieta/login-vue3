<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <v-card>
          <v-row>
            <v-col md="4" sm="4" lg="4" xs="4">
              <v-sheet
              height="auto"
              width="auto"
              color="blue-grey"
              class="text-center">
                <v-icon class="ma-7" size="x-large">mdi mdi-account-group</v-icon>
              </v-sheet>
            </v-col>
            <v-col md="8" sm="8" lg="8" xs="8" class="ml-n7">
              <v-card-title>Usuários</v-card-title>
              <v-card-subtitle>Total de usuários</v-card-subtitle>
            </v-col>
          </v-row>
        </v-card>
      </v-col> 

      <v-col cols="12" md="3">
        <v-card>
          <v-row>
            <v-col md="4" sm="4" lg="4" xs="4">
              <v-sheet
              height="auto"
              width="auto"
              color="light-blue"
              class="text-center">
                <v-icon class="ma-7" size="x-large">mdi mdi-school</v-icon>
              </v-sheet>
            </v-col>
            <v-col md="8" sm="8" lg="8" xs="8" class="ml-n7">
              <v-card-title>Estudantes</v-card-title>
              <v-card-subtitle>Total de estudantes</v-card-subtitle>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card>
          <v-row>
            <v-col md="4" sm="4" lg="4" xs="4">
              <v-sheet
              height="auto"
              width="auto"
              color="orange"
              class="text-center">
                <v-icon class="ma-7" size="x-large">mdi mdi-database-search</v-icon>
              </v-sheet>
            </v-col>
            <v-col md="8" sm="8" lg="8" xs="8" class="ml-n7">
              <v-card-title>Query builder</v-card-title>
              <v-card-subtitle>Querys em geral</v-card-subtitle>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card>
          <v-row>
            <v-col md="4" sm="4" lg="4" xs="4">
              <v-sheet
              height="auto"
              width="auto"
              color="teal"
              class="text-center">
                <v-icon class="ma-7" size="x-large">mdi mdi-google-maps</v-icon>
              </v-sheet>
            </v-col>
            <v-col md="8" sm="8" lg="8" xs="8" class="ml-n7">
              <v-card-title>Google Maps</v-card-title>
              <v-card-subtitle>Localização</v-card-subtitle>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

</script>
