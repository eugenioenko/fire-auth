<template>
  <v-app>
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex class="form-container-box">
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Sign in to {{ $store.state.appTitle }}</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="model.email"
                  ></v-text-field>
                  <v-text-field
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="model.password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="login()" block>Login</v-btn>
              </v-card-actions>
              <v-card-text>
                <p>Don't have an account? Create an <router-link to="signup">account here</router-link></p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <app-alert-messages />
  </v-app>
</template>

<script>
  export default {
    data: () =>({
      model: {
        email: '',
        password: ''
      }
    }),
    created() {

    },
    methods: {
      login(){
        this.$store.dispatch('login', {email: this.model.email, password: this.model.password});
      }
    }
  }
</script>
