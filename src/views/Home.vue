<template>
	<a-card title="En cours de développement" class="wrapper">
		<a-avatar slot="extra" class="logo" src="/img/voltra.png" alt="Logo" size="small"/>

		<a-row type="flex" justify="center" align="middle">
			<a-col :span="12">
				<a-button type="primary">
					<a href="https://github.com/Voltra">Voir les dépôts Github</a>
				</a-button>
			</a-col>
		</a-row>
	</a-card>
</template>

<script>
	export default {
	  name: "Home",
	}
</script>
