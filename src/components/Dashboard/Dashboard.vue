<template>
    <v-container fluid>
        <v-card>
            <v-card-title>Dashboard 1</v-card-title>
            <v-sparkline
            :fill="fill"
            :gradient="selectedGradient"
            :line-width="lineWidth"
            :model-value="value"
            :padding="padding"
            :smooth="smooth"
            auto-draw
            ></v-sparkline>
    
            <v-divider></v-divider>
    
            <v-row>
            <v-col
                cols="12"
                md="6"
            >
                <v-row
                align="center"
                class="fill-height"
                >
                <v-item-group
                    v-model="selectedGradient"
                    mandatory
                >
                    <v-row
                    class="pt-6 pl-6"
                    >
                    <v-item
                        v-for="(gradient, i) in gradients"
                        :key="i"
                        v-slot="{ active, toggle }"
                        :value="gradient"
                    >
                        <v-card
                        :style="{
                            background: gradient.length > 1
                            ? `linear-gradient(0deg, ${gradient})`
                            : gradient[0],
                            border: '2px solid',
                            borderColor: active ? '#222' : 'white'
                        }"
                        class="me-2"
                        height="30"
                        width="30"
                        @click="toggle"
                        ></v-card>
                    </v-item>
                    </v-row>
                </v-item-group>
                </v-row>
            </v-col>
            </v-row>
    
            <v-row
            class="mt-5"
            >
            <v-col
                cols="2"
            >
                Filled
            </v-col>
            <v-col
                cols="3"
            >
                <v-switch
                v-model="fill"
                class="switch"
                ></v-switch>
            </v-col>
            <v-col
                cols="3"
            >
                Line width
            </v-col>
            <v-col
                cols="3"
            >
                <v-slider
                v-model="lineWidth"
                max="10"
                min="0.1"
                step="0.1"
                thumb-label
                ></v-slider>
            </v-col>
            </v-row>
    
            <v-row>
            <v-col
                cols="2"
            >
                Smooth
            </v-col>
            <v-col
                cols="3"
            >
                <v-switch
                v-model="smooth"
                class="switch"
                ></v-switch>
            </v-col>
            <v-col
                cols="3"
            >
                Padding
            </v-col>
            <v-col
                cols="3"
            >
                <v-slider
                v-model="padding"
                cols="3"
                max="25"
                min="0"
                thumb-label
                ></v-slider>
            </v-col>
            </v-row>
        </v-card>
  </v-container>
  <v-container>
    <v-card>
        <v-card-title>Dashboard 2</v-card-title>
        <v-sheet
        class="v-sheet--offset mx-auto"
        color="cyan"
        elevation="12"
        max-width="calc(100% - 32px)"
        rounded="lg"
        >
            <v-sparkline
                :labels="labels"
                :model-value="value2"
                color="white"
                line-width="2"
                padding="16"
            ></v-sparkline>
        </v-sheet>

        <v-card-text class="pt-0">
            <div class="text-h6 font-weight-light mb-2">
                User Registrations
            </div>
            <div class="subheading font-weight-light text-grey">
                Last Campaign Performance
            </div>
            <v-divider class="my-2"></v-divider>
            <v-icon
                class="me-2"
                size="small"
            >
                mdi-clock
            </v-icon>
            <span class="text-caption text-grey font-weight-light">last registration 26 minutes ago</span>
        </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

/**
 * Data
 */
const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ];

const fill = ref(true);
const selectedGradient = ref(gradients[4]);
// const gradients = ref();
const padding = ref(8);
const smooth = ref(true);
const value = ref([0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]);
const lineWidth = ref(2);
const labels = ref([
    '12am',
    '3am',
    '6am',
    '9am',
    '12pm',
    '3pm',
    '6pm',
    '9pm',
]);
const value2 = ref([
    200,
    675,
    410,
    390,
    310,
    460,
    250,
    240,
]);


</script>

<style scoped>
.switch {
  position: relative;
  top: -12px;
}
</style>