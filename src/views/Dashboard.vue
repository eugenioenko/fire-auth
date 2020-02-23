<template>
  <v-app>
   <v-navigation-drawer
      v-model="drawer"
      color="secondary"
      app
    >
      <v-list dense>
        <v-list-item link @click="logout()">
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      color="primary"
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ $store.state.appTitle }}</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <h1> Welcome {{ $store.state.auth.email }} </h1>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer
      app
    >
    @Copyright FireAuth 2020
    </v-footer>
    <app-alert-messages />
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    methods: {
      logout() {
        this.$store.dispatch('logout');
      }
    }
  }
</script>
