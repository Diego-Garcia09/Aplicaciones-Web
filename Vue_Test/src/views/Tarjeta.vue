<template>
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-img
        :src="url"
        cover
      ></v-img>
  
      <v-card-title>
        Top western road trips
      </v-card-title>
  
      <v-card-subtitle>
        1,000 miles of wonder
      </v-card-subtitle>
  
      <v-card-actions>
        <v-btn
          color="orange-lighten-2"
          variant="text"
          @click = "cambiarImagen"
        >
          Explore
        </v-btn>
  
        <v-spacer></v-spacer>
  
        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </template>
  <script setup>
    import { ref } from 'vue';
    const show = ref(false);
    const urlImagen = ref("https://random.imagecdn.app/300/400");
    const url = ref(urlImagen.value);

    async function cambiarImagen(){
        const response = await fetch(urlImagen.value, {
            method: "GET",
            header: {
                "Content-Type": "application/json"
            }
        });
        console.log(response.url);
        url.value = response.url;
    }
  </script>