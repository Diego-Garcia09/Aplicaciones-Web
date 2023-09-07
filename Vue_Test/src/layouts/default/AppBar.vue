<template>
  <v-app-bar flat>
    <v-app-bar-nav-icon @click="drawer = true"> </v-app-bar-nav-icon>
    <v-toolbar-title>Apps Web</v-toolbar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
              <v-list-item prepend-icon="mdi-home">
                <router-link to="/">
                  Home
                </router-link>
            </v-list-item>
            
            <v-list-item prepend-icon="mdi-table">
              <router-link to="/Tablas">
                Tablas
              </router-link>       
            </v-list-item>

          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
 export default {
  name: 'App',
  data: () => ({
    drawer: false,
    group: null,
  })
};
</script>
