<template>
<div class="alert-container">
  <div class="alert-inner-container px-4">
    <v-alert
      v-for="(message, index) in $store.state.notification.messages"
      :type="message.type"
      :key="index"
      dense
      >
        <v-row align="center" no-gutters>
        <v-col class="grow">{{ message.content }}</v-col>
        <v-col class="shrink alert-close" @click="close(index)">
          <v-icon>mdi-close-circle-outline</v-icon>
        </v-col>
      </v-row>
    </v-alert>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    close(index) {
      this.$store.dispatch('notification/remove', index);
    }
  }
}
</script>

<style lang="scss" scoped>
  .alert-container {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    z-index: 100;
  }

  .alert-inner-container {
    bottom: 0;
    max-width: 360px;
    position: absolute;
    right: 0;
    width: 100%;
  }

  .alert-close {
    cursor: pointer;
  }
</style>