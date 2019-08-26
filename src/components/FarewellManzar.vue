<template lang="pug">
.hello.mt-5
  h1 {{ msg }}
  h2.headline Farewell to Manzanar
  h3.subtitle A Routed Site on Fare Thee Wells
  md-button.md-raised.md-lg
    i.fa.fa-strikethrough.fa-2x
    | &nbsp; Virtual Materialized
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'O Hell! O World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
