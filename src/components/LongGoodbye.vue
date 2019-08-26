<template lang="pug">
.hello.mt-5
  h1 {{ msg }}
  h2.headline Good Morning, Midnight
  h3.subtitle Pasadena Existentialism
  md-button.md-raised.md-lg
    i.fa.fa-strikethrough.fa-2x
    | &nbsp; Raymond Chandler
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'The Long Goodbye'
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
