<template>
	<ALayout>
		<ACard class="gdpr-banner" v-show="opened">
			<Gdpr ref="gdpr" :opened="shouldShowModal" @close="close"/>

			<div class="gdpr-banner__text">
				Nous utilisons des cookies pour garantir le fonctionnement du site.
			</div>

			<AButtonGroup class="gdpr-banner__buttons">
				<AButton type="danger" class="gdpr-banner__disable" @click="disableAll">
					Tout refuser
				</AButton>

				<AButton type="success" class="gdpr-banner__disable" @click="enableAll">
					Tout accepter
				</AButton>
			</AButtonGroup>

			<AButtonGroup class="gdpr-banner__buttons">
				<AButton type="info" class="gdpr-banner__tweak" @click="open">
					Modifier
				</AButton>

				<AButton type="primary" class="gdpr-banner__accept" @click="acceptCurrentSelection">
					OK
				</AButton>
			</AButtonGroup>
		</ACard>
	</ALayout>
</template>

<script>

	export default {
		props: {},
		data() {
			return {
				shouldShowModal: false,
			};
		},
		methods: {
			showModal() {
				this.shouldShowModal = true;
			},
			save(){
				return this.$refs.gdpr.save();
			},
			async acceptCurrentSelection() {
				await this.$gdpr.closeBanner();
				this.save();
			},
			open(){
				this.$gdpr_savior.check();
				this.shouldShowModal = true;
			},
			close(){
				this.$gdpr.closeBanner();
				this.shouldShowModal = false;
			},
			enableAll(){
				this.$refs.gdpr.enableAll();
				return this.save();
			},
			disableAll(){
				this.$refs.gdpr.disableAll();
				return this.save();
			},
		},
		computed: {
			opened() {
				return !this.$gdpr.manager.bannerWasShown;
			},
		},
	}
</script>

<style lang="scss" scoped>
	$spacing: 10px;

	.gdpr-banner {
		position: fixed;

		//right: $spacing;
		bottom: $spacing;
		//left: $spacing;

		&__text {
			margin-bottom: $spacing;
		}
	}
</style>
