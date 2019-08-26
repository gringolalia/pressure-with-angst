<template lang="pug">
.hello.mt-5
  h1 {{ msg }}
  h2.headline Oh, Hell! Oh, World!
  h3.subtitle Based on a Novel by a Man Named Lear
  md-button.md-raised.md-lg
    i.fa.fa-strikethrough.fa-2x
    | &nbsp; Paperback Writer
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Goodbye, Columbus'
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
