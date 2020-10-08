<template>
	<div class="table">
		<VclTable v-if="loading" :rows="20" :columns="7"></VclTable>
		<Table
      v-else
      stripe
      v-bind="$attrs"
      v-on="$listeners"
      :columns="columns"
      :data="data"
      style="width:100%;
    ">
			<template slot-scope="{ row, index }" slot="action">
        <slot name="custom-action" />
				<Icon
          v-if="editable"
					class="pointer"
					type="ios-create-outline" 
					size="19" 
					@click="handleEdit(row, index)" 
				/>
				<Icon
          v-if="deletable"
					class="m-l-1 pointer"
					type="md-trash"
					size="18" 
					@click="handleDelete(row, index)" 
				/>
			</template>
		</Table>
    <BaseDrawer
      v-model="editDrawer"
      title="Edit"
    >
      <component
        :is="editComponent"
        v-if="editComponent && editDrawer"
        v-bind="{
          id: resource.id,
          closeDrawer: () => closeEditDrawer()
        }"
        v-on="$listeners"
      />
    </BaseDrawer>
	</div>
</template>
<script>

import { VclTable } from 'vue-content-loading'
import { Table, Icon } from 'view-design'

export default {
	data() {
		return{
			editDrawer: false,
			currentModel: false
		}
	},
	components: {
		VclTable,
		Table,
		Icon,
		EditCustomer: () => import('@/views/customer/edit'),
		EditRetailer: () => import('@/views/retailer/edit')
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
		},
    deletable: {
      type: Boolean,
      default: true
    },
    editable: {
      type: Boolean,
      default: true
    }
	},
	computed: {
    editComponent() {
      return `Edit${this.currentModel}`
    },
	},
	methods: {
    closeEditDrawer() {
      this.editDrawer = false
    },
		handleEdit(row, index) {
			this.currentModel = row.className
			this.resource = row
			this.editDrawer = true
		},
		handleDelete(row, index) {

		}
	}
}

</script>

<style lang="sass" scoped>
.table
  height: 100%
</style>
