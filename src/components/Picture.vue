<template>
  <div class="container">
    <template v-for="item in listData">
      <md-card class="card" md-with-hover>
        <md-card-area>
          <md-card-media>
            <img class="card-pic" :src="item.picture_url">
          </md-card-media>

          <md-card-header>
            <div class="md-title">{{item.title}}</div>
            <div class="md-subhead">{{item.date}}</div>
          </md-card-header>

          <md-card-content>
            {{item.description}}
          </md-card-content>
        </md-card-area>
      </md-card>
    </template>

    <md-snackbar ref="snackbar">
      <span>{{errorMessage}}</span>
    </md-snackbar>
  </div>
</template>

<script>
export default {
  name: 'picture',
  data () {
    return {
      listData: [],
      errorMessage: ''
    }
  },
  created () {
    this.$http.get('/picture_list')
      .then((res) => {
        if (res.data && res.data.list) {
          this.listData = res.data.list
        }
      })
      .catch((err) => {
        this.errorMessage = err.message
        this.$refs.snackbar.open()
      })
  }
}
</script>

<style scoped>
.container {
  margin: 20px;
}
.card {
  margin-bottom: 24px;
}
.card-pic {
  max-width: 460px;
  margin-top: 10px;
}
</style>

