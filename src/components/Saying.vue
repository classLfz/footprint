<template>
  <div class="container">
    <template v-for="item in listData">
      <md-card class="card" md-with-hover>
        <md-card-header>
          <div class="md-subhead">{{item.date}}</div>
        </md-card-header>

        <md-card-content>
          {{item.content}}
        </md-card-content>
      </md-card>
    </template>

    <md-snackbar ref="snackbar">
      <span>{{errorMessage}}</span>
    </md-snackbar>
  </div>
</template>

<script>
export default {
  name: 'saying',
  data () {
    return {
      listData: [],
      errorMessage: ''
    }
  },
  created () {
    this.$http.get('/saying_list')
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
</style>
