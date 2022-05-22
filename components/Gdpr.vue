<template>
	<a-modal
		class="gdpr-modal"
		:centered="true"
		:closable="false"
		:visible="opened"
		@cancel="discard"
		@ok="save"
		okText="Sauvegarder"
		cancelText="Annuler">
		<GdprManager>
			<template #default="{ manager, groups, toggleManager }">
				<ACard class="gdpr" title="Règlement sur la Gestion et la Protection des Données personnelles">
					<template #extra>
						<ASwitch class="gdpr__switch" :checked="manager.enabled" @change="toggleManager"/>
					</template>

					<AButtonGroup class="gdpr__ables">
						<AButton type="error" class="primary gdpr__able" @click="disableAll">
							Tout refuser
						</AButton>
						<AButton type="primary" class="primary gdpr__able" @click="enableAll">
							Tout accepter
						</AButton>
					</AButtonGroup>

					<GdprGroup v-for="group in groups" :key="group.name" :group="group">
						<template #default="{ guards, toggleGroup }">
							<ACard class="gdpr__group" :title="group.name">
								<template #extra>
									<ASwitch
										v-if="guards.length > 1"
										class="gdpr__switch"
										:disabled="group.required"
										:checked="group.enabled"
										@change="toggleGroup"
									/>
								</template>

								<p class="gdpr__description">
									{{ group.description }}
								</p>

								<GdprGuard v-for="guard in guards" :key="guard.name" :guard="guard">
									<template #default="{ toggleGuard }">
										<ACard class="gdpr__item" :title="guard.name">
											<em class="gdpr__storage" v-if="$gdprStorageToString(guard.storage)">
												Situé dans : {{ $gdprStorageToString(guard.storage) }}
											</em>

											<p class="gdpr__description">{{ guard.description }}</p>

											<template #extra>
												<ASwitch
													v-if="guards.length > 1"
													class="gdpr__switch"
													:disabled="guard.required"
													:checked="guard.enabled"
													@change="toggleGuard"
												/>
											</template>
										</ACard>
									</template>
								</GdprGuard>
							</ACard>
						</template>
					</GdprGroup>
				</ACard>
			</template>
		</GdprManager>
	</a-modal>
</template>

<script>
	import VueTypes from "vue-types";
	import { GdprManager, GdprGroup, GdprGuard } from "vue-gdpr-guard";
	import { GdprStorage } from "gdpr-guard-local";

	const placement = "bottomRight";

	export default {
		props: {
			opened: VueTypes.bool.def(false),
		},
		components: {
			GdprManager,
			GdprGroup,
			GdprGuard,
		},
		methods: {
			enableAll() {
				this.$gdpr.enable();
			},
			disableAll() {
				this.$gdpr.disable();
			},
			close() {
				this.$emit("close");
			},
			async discard() {
				const didStore = await this.$gdpr_savior.storeIfNotExists(this.$gdpr.raw());

				if (didStore) {
					this.$notification.info({
						message: "Nous avons bien annulé vos modifications",
						placement,
					});
				} else {
					this.$notification.error({
						message: "Nous n'avons pas réussi à annuler vos modifications",
						placement,
					});
				}

				this.close();
			},
			async save() {
				const didStore = await this.$gdpr_savior.store(this.$gdpr.raw());

				if (didStore) {
					this.$notification.success({
						message: "Nous avons sauvegardé vos préférences",
						placement,
					});
					this.$gdpr.closeBanner();
				} else {
					this.$notification.error({
						message: "Nous n'avons pas réussi à sauvegarder vos préférences",
						placement,
					});
				}

				this.close();
			},
			$gdprStorageToString(storage) {
				switch (storage) {
					case GdprStorage.Cookie:
						return "cookies";

					case GdprStorage.FileSystem:
						return "fichiers locaux";

					case GdprStorage.IndexedDb:
						return "base de données intégrée";

					case GdprStorage.LocalStorage:
						return "localStorage";

					case GdprStorage.SessionStorage:
						return "sessionStorage";

					case GdprStorage.ServerStorage:
						return "serveur";

					default:
						return null;
				}
			},
		},
	};
</script>

<style lang="scss">
	.gdpr {
		&-modal {
			.ant-modal {
				width: 95% !important;
			}
		}

		&__ables {
			display: block !important;
			margin-bottom: 1em;
			text-align: center;
		}

		&__storage {
			font-size: 0.8em;
			font-style: italic;
		}

		&__group, &__item {
			& + & {
				margin-top: 1em;
			}
		}
	}
</style>
