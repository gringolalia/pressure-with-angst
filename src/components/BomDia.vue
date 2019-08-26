<template lang="pug">
.hello.mt-5
  img(src="../assets/cathar-crux.svg" width="200px")
  h1 {{ msg }}
  h2.headline Bom Dia, Meia-Noite
  h3.subtitle Emily Dickinson Said So Two
  md-button.md-raised.md-lg
    i.fa.fa-strikethrough.fa-2x
    | &nbsp;&nbsp; No Hello
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Please Unbar This Foo'
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
