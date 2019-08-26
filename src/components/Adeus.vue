<template lang="pug">
.hello.mt-5
  img(src='../assets/hammer-sickle.svg' width="200px")
  h1 {{ msg }}
  h2.headline Adeus, Mundo Imuno
  h3.subtitle Cathars and the Problem of Evil
  md-button.md-raised.md-default
    i.fa.fa-strikethrough.fa-2x
    | &nbsp; Matter & Schmata
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'The Foo of this Project Is Barred'
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-container {
    min-height: 300px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-content {
    padding: 16px;
  }
</style>

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
