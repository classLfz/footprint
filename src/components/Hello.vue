<template>
  <div class="intro-container">
    <template v-for="item in introData">
      <h2>{{item.title}}</h2>
      <div class="description">
        {{item.description}}
      </div>
    </template>

    <md-snackbar ref="snackbar">
      <span>{{errorMessage}}</span>
    </md-snackbar>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      introData: [],
      errorMessage: ''
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  created () {
    this.$http.get('/intro')
      .then((res) => {
        if (res.data && res.data.introData) {
          this.introData = res.data.introData
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
.intro-container {
  margin: 20px;
  display: flex;
  flex-direction: column;
}

.description {
  text-align: left;
}
h2 {
  text-align: left;
}
</style>
