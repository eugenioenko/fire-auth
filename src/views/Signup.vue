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
                <v-toolbar-title>Sign up to {{ $store.state.appTitle }}</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <p>Already have an account? <router-link to="login"> Sing in here</router-link></p>
                <v-form v-on:submit.prevent="signup()">
                  <v-text-field
                    label="Email Address"
                    name="email"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="model.email"
                    :rules="[validEmail]"
                  ></v-text-field>
                  <v-text-field
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock-outline"
                    type="password"
                    v-model="model.password"
                  ></v-text-field>
                  <v-text-field
                    label="Confirm Password"
                    name="repeatpassword"
                    prepend-icon="mdi-lock-reset"
                    type="password"
                    v-model="model.confirmPassword"
                    :rules="[comparePasswords]"
                  ></v-text-field>
                  <button type="submit" class="d-none"></button>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn type="submit" color="primary" block @click="signup()">Create account</v-btn>
              </v-card-actions>
              <v-card-text>
                <p>By clicking Create account, I agree that:
                  <ul>
                    <li>I have read and accepted the Terms of Use.</li>
                    <li>See our Privacy Policy for more details or to opt-out at any time.</li>
                  </ul>
                </p>
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
    props: {
    },
    data: () => ({
      model: {
        email: '',
        password: '',
        confirmPassword: ''
      }
    }),
    methods: {
      signup() {
        this.$store.dispatch('signup', {email: this.model.email, password: this.model.password});
      }
    },
    computed: {
      comparePasswords() {
        return this.model.password === this.model.confirmPassword ? true : 'Passwords don\'t match'
      },
      validEmail() {
        return this.model.email && this.model.email.length  && (/\S+@\S+\.\S+/).test(this.model.email) ? true : 'Email is required'
      }
    }
  }
</script>
