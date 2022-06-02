<template>
	<a-list :dataSource="scholarships" :grid="grid" :pagination="pagination">
		<template #renderItem="scholarship">
			<a-list-item>
				<Scholarship :scholarship="scholarship"/>
			</a-list-item>
		</template>
	</a-list>
</template>

<script>
	import Scholarship from "@/components/Scholarship"
	import { withUtm } from "@/js/utils"

	export default {
		components: {
			Scholarship,
		},
		data(){
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
			scholarships() {
				return [
					this.$t("studies.polytech"),
					this.$t("studies.dut"),
				];
			},
		}
	}
</script>
