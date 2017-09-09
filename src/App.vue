<template>
  <div id="app">
    <md-toolbar>
      <md-button class="md-icon-button" @click="_toggleSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 style="display: flex; flex: 1;">Footprint</h2>

      <md-button class="md-icon-button" href="https://github.com/classLfz/" target="_blank">
        <md-icon>account_circle</md-icon>
      </md-button>
    </md-toolbar>

    <md-sidenav class="md-left" ref="sidenav">
      <md-toolbar>
        <div class="md-toolbar-container">
          <h3>Footprint</h3>
        </div>
      </md-toolbar>

      <md-list>
        <md-list-item href="#/" @click="_toggleSidenav">
          <md-icon>explore</md-icon>
          <span>简介</span>
        </md-list-item>

        <md-list-item href="#/picture" @click="_toggleSidenav">
          <md-icon>picture_in_picture</md-icon>
          <span>看图</span>
        </md-list-item>

        <md-list-item href="#/saying" @click="_toggleSidenav">
          <md-icon>record_voice_over</md-icon>
          <span>说话</span>
        </md-list-item>
      </md-list>
    </md-sidenav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    _toggleSidenav () {
      this.$refs.sidenav.toggle()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(./assets/icons.woff2) format('woff2');
}
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
</style>
