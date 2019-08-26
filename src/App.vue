<template lang="pug">
#app
	.page-container.md-layout-column
		md-toolbar.md-default(style="position: fixed; top=0; width: 100%;")
			md-button.md-icon-button(@click='showNavigation = true')
				md-icon menu

			span.md-title
				i.fa.fa-gears.fa-2x
				| &nbsp; Engenho Novo PWA

		md-drawer(dark :md-active.sync='showNavigation')
			md-toolbar(md-elevation='2', style="background-color: #607D8B; color: white;")
				span.md-title(style="color: white;")
					i.fa.fa-podcast.fa-2x
					| &nbsp; Mediapedia

			md-list(router='', exact='', @click='showNavigation = false')

				md-list-item(to="/alpha")
					i.material-icons(style="margin-right: 30px;") directions_run

					span.md-list-item-text Radio

				md-list-item(to="/beta")
					i.material-icons(style="margin-right: 30px;") directions_bike

					span.md-list-item-text Telegraph

				md-list-item(to="/gamma")
					i.material-icons(style="margin-right: 30px;") ring_volume

					span.md-list-item-text Telephone

				md-list-item(to="/delta")
					i.material-icons(style="margin-right: 30px;") beach_access

					span.md-list-item-text Packet Switching

				md-list-item(to="/zeta")
					i.material-icons(style="margin-right: 30px;") computer

					span.md-list-item-text Protocolo da Rede

				md-list-item(to="/eta")
					i.material-icons(style="margin-right: 30px;") toys

					span.md-list-item-text Marcando Hipertexto

				md-list-item(to="/theta")
					i.material-icons(style="margin-right: 30px;") all_inclusive

					span.md-list-item-text Cascatas de Estilo

				md-list-item(to="/iota")
					i.material-icons(style="margin-right: 30px;") accessible_forward

					span.md-list-item-text Roteiro com Café


		md-drawer.md-right(dark :md-active.sync='showSidepanel')
			md-toolbar(md-elevation='0', style="background-color: #607D8B;")
				span.md-title(style="color: white;")
					i.material-icons(style="margin-right: 30px;") ring_volume
					| &nbsp; Communications

			md-list(@click="showSidepanel = false")
				md-list-item(to="/alpha")
					span.md-list-item-text Thomas Alva Edison

					md-button.md-icon-button.md-list-action(to="/con-edison")
						md-icon.md-default ring_volume

				md-list-item(to="/beta")
					span.md-list-item-text Claude Chappe

					md-button.md-icon-button.md-list-action
						md-icon brightness_low

				md-list-item(to="/gamma")
					span.md-list-item-text Nikola Tesla

					md-button.md-icon-button.md-list-action
						md-icon.md-default signal_cellular_off

				md-list-item(to="/delta")
					span.md-list-item-text Guigliemo Marconi

					md-button.md-icon-button.md-list-action
						md-icon wifi_tethering

				md-list-item(to="/epsilon")
					span.md-list-item-text Arthur C. Clarke

					md-button.md-icon-button.md-list-action
						md-icon usb

				md-list-item(to="/zeta")
					span.md-list-item-text Alexander Graham Bell

					md-button.md-icon-button.md-list-action
						md-icon cast

				md-list-item(to="/eta")
					span.md-list-item-text Samuel Morse

					md-button.md-icon-button.md-list-action
						md-icon headset

				md-list-item(to="/theta")
					span.md-list-item-text Alan Turing

					md-button.md-icon-button.md-list-action
						md-icon code

				md-list-item(to="/iota")
					span.md-list-item-text Philo Farnsworth

					md-button.md-icon-button.md-list-action
						md-icon tv

		main(style="margin-bottom: 150px")
			router-view
</template>


<style>

body {
	margin: 0;
}

#app {
	font-family: 'News Cycle', 'Helvetica Neue', Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}

.md-list-action {
	color: black;
}

md-list-item {
	color: black;
}

router-link {
	color: black;
}

main {
	text-align: center;
	/* margin-top: 40px; */
}

header {
	margin: 0;
	height: 56px;
	padding: 0 16px 0 24px;
	background-color: #35495E;
	color: #ffffff;
}

header span {
	display: block;
	position: relative;
	font-size: 20px;
	line-height: normal;
	letter-spacing: .02em;
	font-weight: 400;
	box-sizing: border-box;
	padding-bottom: 16px;
}
	.md-drawer {
		width: 230px;
		max-width: calc(100vw - 125px);
		z-index: 902;
		background-color: #607d8b;
		color: black;
	}


	li > a {
		text-decoration: none;
		color: black;
	}
</style>

<script>
	export default {
		name: 'Temporary',
		data: () => ({
			showNavigation: false,
			showSidepanel: false
		})
	}
</script>
