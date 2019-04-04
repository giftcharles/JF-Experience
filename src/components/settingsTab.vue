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
      theme: '',
      themesList: {
        default: 'default',
        light : 'light',
        Dark : 'dark',
        kouda : 'kouda',
        pink : 'pink',
        high_contrast : 'high contrast',
        blue : 'blue',
      }
    }),
    created:function() {
        this.loadData();
    },
    methods:{
      loadData: function(){
          var vm = this;
          chrome.storage.sync.get({ThemeChoiceName: 'default'}, function(data) {
              chrome.storage.sync.set({ThemeChoiceName: data.ThemeChoiceName}, function() {
                
              });

              var ThemeName = data.ThemeChoiceName;
              console.log(ThemeName);

              vm.theme = ThemeName;


           });

      }
      
    },
    watch: {
      theme: {
        handler: function(val, oldval){

          if (val == oldval){
            console.log('the old and new theme are the same, quitting...');
            return;
          }

          chrome.storage.sync.set({ThemeChoiceName: val}, function() {
          // The value is now stored, so you don't have to do this again
            console.log('the theme choice variable has been modified in storage');

            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
              chrome.tabs.sendMessage(tabs[0].id, {ChangeThemeLive: "Now"}, function(response) {
                console.log(response.message);

              });
            });

          });
        }
      }
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
