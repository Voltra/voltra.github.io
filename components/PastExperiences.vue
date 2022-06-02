<template>
	<a-list :dataSource="experiences" :grid="grid" :pagination="pagination">
		<template #renderItem="experience">
			<a-list-item>
				<PastExperience :experience="experience" />
			</a-list-item>
		</template>
	</a-list>
</template>

<script>
import PastExperience from "@/components/PastExperience"
import { withUtm } from "@/js/utils"

const Companies = {
	SWPL: {
		name: "swimming pool",
		url: "https://swpl.fr",
		logo: "https://www.swimmingpool-agence.fr/sites/swpl-site/themes/sdt/dist/img/logo.png",
	},
	LMDT: {
		name: "La Maison Du Taraud",
		url: "https://lamaisondutaraud.com",
		logo: "https://mon-taraud.com/assets/img/lmdt.png",
	},
};

export default {
	components: {
		PastExperience,
	},
	data() {
		return {
			grid: {
				gutter: 16,
				column: 1,
			},
			pagination: {
				hideOnSinglePage: true,
				pageSize: 3,
			},
		};
	},
	computed: {
		experiences() {
			return [
				{
					...this.$t('pastExperiences.sept2021'),
					company: Companies.SWPL,
				},
				{
					...this.$t('pastExperiences.febr2021augu2021'),
					company: Companies.SWPL,
				},
				{
					...this.$t('pastExperiences.july2020augu2020'),
					company: Companies.SWPL,
				},
				{
					...this.$t('pastExperiences.nove2019mai2020'),
					company: Companies.LMDT,
				},
				{
					...this.$t('pastExperiences.june2019july2019'),
					company: Companies.SWPL,
				},
				{
					...this.$t('pastExperiences.apri2018june2018'),
					company: Companies.SWPL,
				},
			];
		}
	}
}
</script>


