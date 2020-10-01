<template>
	<div class="table">
		<VclTable v-if="loading" :rows="20" :columns="7"></VclTable>
		<Table v-else stripe v-bind="$attrs" v-on="$listeners" :columns="columns" :data="data" style="width:100%;">
				<template slot-scope="{ row, index }" slot="action">
				</template>
		</Table>
	</div>
</template>
<script>

import { VclTable } from 'vue-content-loading'
import { Table } from 'view-design'

export default {
	data() {
		return{

		}
	},
	components: {
		VclTable,
		Table
	},
	props: {
		columns: {
			type: Array,
			required: true
		},
		data: {
			type: Array,
			required: true
		},
		loading: {
			type: Boolean,
			default: false
		}
	}
}

</script>

<style scoped>
.table {
	height: calc(100% - 17rem);
}
	
</style>
