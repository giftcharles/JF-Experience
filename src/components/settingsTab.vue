<template>
  <div class="settings">
      <div class="full-control">
        <md-list>
          <md-subheader>Themes</md-subheader>

          <md-list-item v-for="themeItem in themesList" :key="themeItem">
            <md-radio v-model="theme" :value="themeItem" />
            <span class="md-list-item-text">{{themeItem}}</span>
          </md-list-item>

        </md-list>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'settingsTab',
    data: () => ({
      theme: 'default',
      themesList: {
        default : 'Default',
        light : 'Light',
        Dark : 'Dark',
        kouda : 'Kouda',
        pink : 'Pink',
        high_contrast : 'High Contrast',
        blue : 'Blue',
      }
    })
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
