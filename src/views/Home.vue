<template>
	<a-card title="En cours de développement" class="wrapper">
		<a-avatar slot="extra" class="logo" src="/voltra.png" alt="Logo" size="small"/>
	  
		<a-row type="flex" justify="center" align="middle">
			<a-col :span="12">
				<a href="https://github.com/Voltra">
					<a-button type="primary">
						Voir les dépôts Github
					</a-button>
				</a>
			</a-col>
		</a-row>
	</a-card>
</template>

<script>
	export default {
	  name: 'Home',
	}
</script>
