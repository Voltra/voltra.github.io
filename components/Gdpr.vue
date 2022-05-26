<i18n lang="yaml">
fr:
  okText: Sauvegarder
  cancelText: Annuler
  managerTitle: Règlement sur la Gestion et la Protection des Données personnelles
  rejectAll: Tout refuser
  allowAll: Tout accepter
  successfullyCancelChanges: Nous avons bien annulé vos modifications
  failedToCancelChanges: Nous n'avons pas réussi à annuler vos modifications
  successfullySavedPreferences: Nous avons sauvegardé vos préférences
  failedToSavePreferences: Nous n'avons pas réussi à sauvegarder vos préférences
  locatedIn: "Situé dans :"
  gdprStorage:
      cookies: cookies
      fs: fichiers locaux
      indexedDb: base de données intégrée au navigateur (IndexedDB)
      localStorage: localStorage
      sessionStorage: sessionStorage
      server: serveur du site

en:
  okText: Save
  cancelText: Cancel
  managerTitle: General Data Protection Regulation
  rejectAll: Reject all
  allowAll: Allow all
  successfullyCancelChanges: Your changes have been successfully canceled
  failedToCancelChanges: We failed to cancel your changes
  successfullySavedPreferences: Your preferences have been saved
  failedToSavePreferences: We failed to save your preferences
  locatedIn: "Located in:"
  gdprStorage:
	  cookies: cookies
	  fs: local files
	  indexedDb: browser's integrated database (IndexedDB)
	  localStorage: localStorage
	  sessionStorage: sessionStorage
	  server: website's server
</i18n>

<template>
	<a-modal
		class="gdpr-modal"
		:centered="true"
		:closable="false"
		:visible="opened"
		@cancel="discard"
		@ok="save"
		:okText="$t('okText')"
		:cancelText="$t('cancelText')">
		<GdprManager>
			<template #default="{ manager, groups, toggleManager }">
				<ACard class="gdpr" :title="$t('managerTitle')">
					<template #extra>
						<ASwitch class="gdpr__switch" :checked="manager.enabled" @change="toggleManager"/>
					</template>

					<AButtonGroup class="gdpr__ables">
						<AButton type="error" class="primary gdpr__able" @click="disableAll">
							{{ $t('rejectAll') }}
						</AButton>

						<AButton type="primary" class="primary gdpr__able" @click="enableAll">
							{{ $t('allowAll') }}
						</AButton>
					</AButtonGroup>

					<GdprGroup v-for="group in groups" :key="group.name" :group="group">
						<template #default="{ guards, toggleGroup }">
							<ACard class="gdpr__group" :title="$t(`gdprGuard.${group.name}.name`)">
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
									{{ $t(`gdprGuard.${group.name}.description`) }}
								</p>

								<GdprGuard v-for="guard in guards" :key="guard.name" :guard="guard">
									<template #default="{ toggleGuard }">
										<ACard class="gdpr__item" :title="$t(`gdprGuard.${guard.name}.name`)">
											<em class="gdpr__storage" v-if="$gdprStorageToString(guard.storage)">
												{{ $t('locatedIn') }} {{ $gdprStorageToString(guard.storage) }}
											</em>

											<p class="gdpr__description">
												{{ $t(`gdprGuard.${guard.name}.description`) }}
											</p>

											<template #extra>
												<ASwitch
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
				const onError = () => {
					this.$notification.error({
						message: this.$t('failedToCancelChanges'),
						placement,
					});
				};

				try {
					const didStore = await this.$gdpr_savior.storeIfNotExists(this.$gdpr.raw());

					if (didStore) {
						this.$notification.info({
							message: this.$t('successfullyCancelChanges'),
							placement,
						});
					} else {
						onError();
					}

					this.close();
				} catch(e) {
					console.error(e);
					onError();
				}
			},
			async save() {
				const onError = () => {
					this.$notification.error({
						message: this.$t('failedToSavePreferences'),
						placement,
					});
				};

				try {
					const didStore = await this.$gdpr_savior.store(this.$gdpr.raw());

					if (didStore) {
						this.$notification.success({
							message: this.$t('successfullySavedPreferences'),
							placement,
						});
						this.$gdpr.closeBanner();
					} else {
						onError();
					}

					this.close();
				} catch(e) {
					console.error(e);
					onError();
				}
			},
			$gdprStorageToString(storage) {
				switch (storage) {
					case GdprStorage.Cookie:
						return this.$t('gdprStorage.cookies');

					case GdprStorage.FileSystem:
						return this.$t('gdprStorage.fs');

					case GdprStorage.IndexedDb:
						return this.$t('gdprStorage.indexedDb');

					case GdprStorage.LocalStorage:
						return this.$t('gdprStorage.localStorage');

					case GdprStorage.SessionStorage:
						return this.$t('gdprStorage.sessionStorage');

					case GdprStorage.ServerStorage:
						return this.$t('gdprStorage.server');

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
