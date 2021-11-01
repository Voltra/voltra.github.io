<template>
	<a-layout>
		<a-card class="gdpr-banner" v-show="opened">
			<Gdpr
				ref="gdpr"
				:opened="openModal"
				@close="close"/>

			<div class="gdpr-banner__text">
				Nous utilisons des cookies pour garantir le fonctionnement du site.
			</div>

			<a-button-group class="gdpr-banner__buttons">
				<a-button type="danger" class="gdpr-banner__disable" @click="disableAll">
					Tout refuser
				</a-button>

				<a-button type="success" class="gdpr-banner__disable" @click="enableAll">
					Tout accepter
				</a-button>

				<a-button type="info" class="gdpr-banner__tweak" @click="open">
					Modifier
				</a-button>

				<a-button type="primary" class="gdpr-banner__accept" @click="save">
					OK
				</a-button>
			</a-button-group>
		</a-card>
	</a-layout>
</template>

<script>
	import Gdpr from "@/components/Gdpr"

	export default {
		props: {},
		components: {
			Gdpr,
		},
		data(){
			return {
				opened: !this.$gdpr_savior?.exists?.(),
				openModal: false,
			}
		},
		methods: {
			save(){
				this.$refs.gdpr.save();
			},
			open(){
				this.$gdpr_savior.check();
				this.opened = true;
				this.openModal = true;
			},
			close(){
				this.opened = false;
				this.openModal = false;
			},
			enableAll(){
				this.$refs.gdpr.enableAll();
				this.save();
			},
			disableAll(){
				this.$refs.gdpr.disableAll();
				this.save();
			},
		},
	}
</script>
