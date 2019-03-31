<template>
  <div id="app">
    <md-tabs class="md-primary" md-alignment="centered">
      <md-tab id="tab-home" md-label="Home">
        home tab
      </md-tab>
      <md-tab id="tab-pages" md-label="Pages">
        page tab
      </md-tab>
      <md-tab id="tab-posts" md-label="Posts">
        Posts tab
      </md-tab>
      <md-tab id="tab-settings" md-label="Settings">
        <settingstab></settingstab>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import settingstab from './components/settingsTab.vue'

export default {
  name: 'app',
  components: {
    settingstab
  }
}
</script>

<style lang="scss">

  @import "~vue-material/dist/theme/engine"; // Import the theme engine

  @include md-register-theme("default", (
    primary: #0c4c6e, // The primary color of your application
    accent: #a5cae4 // The accent or secondary color
  ));

  @import "~vue-material/dist/theme/all"; // Apply the theme

  #app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
</style>