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
      style="width:100%;"
      @on-row-click="handleRowClick"
    >
			<template slot-scope="{ row, index }" slot="action">
        <slot :row="row" />
				<Icon
          v-if="editable"
					class="pointer"
					type="ios-create-outline" 
					size="19" 
					@click.stop="handleEdit(row, index)" 
				/>
				<Icon
          v-if="deletable"
					class="m-l-1 pointer"
					type="md-trash"
					size="18" 
					@click.stop="handleDelete(row, index)" 
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
    <BaseDrawer
      v-model="resourceShowDrawer"
      :title="drawerTitle"
      placement="right"
      v-on="$listeners"
    >
      <component
        :is="resourceShowComponent"
        v-if="resourceShowDrawer"
        v-bind="{
          id: resource.id
        }"
        v-on="$listeners"
      />
    </BaseDrawer>
	</div>
</template>
<script>

import { VclTable } from 'vue-content-loading'
import { Table, Icon } from 'view-design'
import * as models from '@/models'
import plural from '@/helpers/resource-name-pluralizer'
import BaseModal from '@/components/_base-modal'

export default {
	data() {
		return{
			editDrawer: false,
			currentModel: false,
      resourceShowDrawer: false,
      drawerTitle: '',
      resource: null
		}
	},
	components: {
		VclTable,
		Table,
		Icon,
		EditCustomer: () => import('@/views/customer/edit'),
		EditRetailer: () => import('@/views/retailer/edit'),
		EditRetailerType: () => import('@/views/retailer-type/edit'),
    EditProduct: () => import('@/views/product/edit'),
    EditPayment: () => import('@/views/payment/edit'),
    EditCategory: () => import('@/views/category/edit'),
    CustomerShow: () => import('@/views/customer/show'),
    RetailerShow: () => import('@/views/retailer/show'),
    PaymentShow: () => import('@/views/payment/show'),
    UserShow: () => import('@/views/user/show'),
    ProductShow: () => import('@/views/product/show'),
    RetailerTypeShow: () => import('@/views/retailer-type/show'),
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
    resourceShowComponent() {
      return `${this.currentModel}Show`
    }
	},
	methods: {
    handleEmmision(row) {
      this.$emit('on-custom-click', row)
    },
    closeEditDrawer() {
      this.editDrawer = false

    },
		handleEdit(row, index) {
			this.currentModel = row.className
			this.resource = row
			this.editDrawer = true
		},
    handleRowClick(rowData) {
      if (typeof this.$listeners['on-row-click'] === 'function') {
        return this.$emit('on-row-click', rowData)
      }
      this.currentModel = rowData.className
      this.resourceShowDrawer = !this.resourceShowDrawer
      this.resource = rowData
      this.drawerTitle = this.resource.name || this.resource.title
    },
		handleDelete(row, index) {
			const { className } = row 
      const currentModel = models[className]
      const storePrefix = _.camelCase(className)
      const loadingKey = this.$store.getters[
        `${storePrefix}Store/${plural(storePrefix)}Loading`
      ]
      BaseModal.render({
        props: {
          title: 'Are you sure you want to delete ?',
          content: 'Note: Item will be deleted permanently',
          loading: loadingKey,
          type: 'confirm',
          okText: 'confirm',
          cancelText: 'cancel',
          closable: true,
          onOk: () => {
            debugger
            const storeKey = `${storePrefix}Store/destroy${className}`
            this.$store
              .dispatch(storeKey, {
                [storePrefix]: new currentModel(row)
              })
              .then(() => {
                this.$store.dispatch(
                  `${storePrefix}Store/get${_.upperFirst(plural(storePrefix))}`
                )
                // BaseModal.remove()
              })
          }
        }
      })
		}
	}
}

</script>

<style lang="sass" scoped>
.table
  height: 100%
</style>
