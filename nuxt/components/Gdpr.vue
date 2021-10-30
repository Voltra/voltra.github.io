<template>
    <a-modal class="gdpr-modal" :centered="true" :closable="false" :visible="opened" @cancel="discard" @ok="save" okText="Sauvegarder" cancelText="Annuler">
        <GdprManager>
            <a-card class="gdpr" slot-scope="{ manager, groups, toggleManager }" title="Règlement sur la Gestion et la Protection des Données personnelles">
				<a-switch slot="extra" class="gdpr__switch" :checked="manager.enabled" @change="toggleManager"/>
				
				<a-button-group class="gdpr__ables">
					<a-button type="error" class="primary gdpr__able" @click="disableAll">Tout refuser</a-button>
					<a-button type="primary" class="primary gdpr__able" @click="enableAll">Tout accepter</a-button>
				</a-button-group>

                <GdprGroup v-for="group in groups" :key="group.name" :group="group">
                    <a-card class="gdpr__group" slot-scope="{ guards, toggleGroup }" :title="group.name">
						<a-switch v-if="guards.length > 1" slot="extra" class="gdpr__switch" 
							:disabled="group.required" :checked="group.enabled" @change="toggleGroup"/>
						
						<p class="gdpr__description">
							{{ group.description }}
						</p>

                        <GdprGuard v-for="guard in guards" :key="guard.name" :guard="guard">
                            <a-card class="gdpr__item" slot-scope="{ toggleGuard }" :title="guard.name">
								<em class="gdpr__storage" v-if="$gdprStorageToString(guard.storage)">
									Situé dans : {{ $gdprStorageToString(guard.storage) }}
								</em>

								<p class="gdpr__description">{{ guard.description }}</p>

								<a-switch v-if="guards.length > 1" slot="extra" class="gdpr__switch" 
						:disabled="guard.required" :checked="guard.enabled" @change="toggleGuard"/>
                            </a-card>
                        </GdprGuard>
                    </a-card>
                </GdprGroup>
            </a-card>
        </GdprManager>
    </a-modal>
</template>

<script>
	import VueTypes from "vue-types"
	import { GdprManager, GdprGroup, GdprGuard } from "vue-gdpr-guard"
	
	const placement = "bottomRight";

	export default {
		components: {
			GdprManager,
			GdprGroup,
			GdprGuard,
		},
		props: {
			opened: VueTypes.bool.def(false),
		},
		methods: {
			enableAll(){
				this.$gdpr.enable();
			},
			disableAll(){
				this.$gdpr.disable();
			},
			close(){
				//this.$ga.load(this); // wake google analytics on close
				this.$emit("close");
			},
			discard(){
				const didStore = this.$gdpr_serde.storeIfNotExists(this.$gdpr.raw());

				if(didStore)
					this.$notification.info({
						message: "Nous avons bien annulé vos modifications",
						placement
					});
				else
					this.$notification.error({
						message: "Nous n'avons pas réussi à annuler vos modifications",
						placement,
					})

				this.close();
			},
			save(){
				const didStore = this.$gdpr_serde.store(this.$gdpr.raw());

                if(didStore)
                    this.$notification.success({
						message: "Nous avons sauvegardé vos préférences",
						placement,
					});
                else
                    this.$notification.error({
						message: "Nous n'avons pas réussi à sauvegarder vos préférences",
						placement,
					});

				this.close();
			},
		},
	}
</script>

<style lang="scss">
	.gdpr{
		&-modal{
			.ant-modal{
				width: 95% !important;
			}
		}
		
		&__ables{
			display: block !important;
			margin-bottom: 1em;
			text-align: center;
		}
		
		&__storage{
			font-size: 0.8em;
			font-style: italic;
		}
		
		&__group, &__item{
			& + &{
				margin-top: 1em;
			}
		}
	}
</style>