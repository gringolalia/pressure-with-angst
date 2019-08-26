<template lang="pug">
.hello.mt-5
	.md-layout.md-gutter
		.md-layout-item.md-medium-size-33.md-small-size-100
			img(src='../assets/biohazard.svg', width='200px', style="margin-top: 50px")
			h1 {{ msg }}
			h2.headline This is the Story of Johnny Rotten
			h3.subtitle Vue Material in a Webpack Andaime
			md-button.md-raised.md-lg
				i.fa.fa-strikethrough.fa-2x
				| &nbsp; An Urgent Antimatter
		.md-layout-item.md-medium-size-33.md-small-size-100
			img(src='../assets/biohazard.svg', width='200px', style="margin-top: 50px")
			h1 {{ msg }}
			h2.headline This is the Story of Johnny Rotten
			h3.subtitle Vue Material in a Webpack Andaime
			md-button.md-raised.md-lg
				i.fa.fa-strikethrough.fa-2x
				| &nbsp; An Urgent Antimatter
		.md-layout-item.md-medium-size-33.md-small-size-100
			img(src='../assets/biohazard.svg', width='200px', style="margin-top: 50px")
			h1 {{ msg }}
			h2.headline This is the Story of Johnny Rotten
			h3.subtitle Vue Material in a Webpack Andaime
			md-button.md-raised.md-lg
				i.fa.fa-strikethrough.fa-2x
				| &nbsp; An Urgent Antimatter

</template>

<script>
export default {
	name: 'hello',
	data () {
		return {
			msg: 'Goodbye, Sister Disco'
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
