<template lang="pug">
.hello.mt-5
  .md-layout.mt-5
    .md-layout-item.md-medium-size-33.md-small-size-100(style="margin-top: 50px")
      img(src='../assets/alchemy.svg')
      h1 {{ msg }}
      h2.headline Thanks for the Coordinates
      h3.subtitle But   Your Phenomenology Sucks
      md-button.md-raised.md-lg
        i.fa.fa-strikethrough.fa-2x
        | &nbsp; Virtual Materialized
    .md-layout-item.md-medium-size-33.md-small-size-100(style="margin-top: 50px")
      img(src='../assets/alchemy.svg')
      h1 {{ msg }}
      h2.headline Thanks for the Coordinates
      h3.subtitle But Your Phenomenology Sucks
      md-button.md-raised.md-lg
        i.fa.fa-strikethrough.fa-2x
        | &nbsp; Virtual Materialized
    .md-layout-item.md-medium-size-33.md-small-size-100(style="margin-top: 50px")
      img(src='../assets/alchemy.svg')
      h1 {{ msg }}
      h2.headline Thanks for the Coordinates
      h3.subtitle But   Your Phenomenology Sucks
      md-button.md-raised.md-lg
        i.fa.fa-strikethrough.fa-2x
        | &nbsp; Virtual Materialized

  .md-layout(style="margin-top: 60px;")
    .md-layout-item.md-medium-size-33.md-small-size-100(style="margin-top: 50px")
      img(src='../assets/alchemy.svg')
      h1 {{ msg }}
      h2.headline Thanks for the Coordinates
      h3.subtitle But   Your Phenomenology Sucks
      md-button.md-raised.md-lg
        i.fa.fa-strikethrough.fa-2x
        | &nbsp; Virtual Materialized
    .md-layout-item.md-medium-size-33.md-small-size-100(style="margin-top: 50px")
      img(src='../assets/alchemy.svg')
      h1 {{ msg }}
      h2.headline Thanks for the Coordinates
      h3.subtitle But   Your Phenomenology Sucks
      md-button.md-raised.md-lg
        i.fa.fa-strikethrough.fa-2x
        | &nbsp; Virtual Materialized
    .md-layout-item.md-medium-size-33.md-small-size-100(style="margin-top: 50px")
      img(src='../assets/alchemy.svg')
      h1 {{ msg }}
      h2.headline Thanks for the Coordinates
      h3.subtitle But   Your Phenomenology Sucks
      md-button.md-raised.md-lg
        i.fa.fa-strikethrough.fa-2x
        | &nbsp; Virtual Materialized


</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Goodbye, Descartes'
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
