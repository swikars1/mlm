import BaseStatusBadge from '@/components/_base-status-badge'

const CUSTOMER_COLUMNS = [
	{
	  title: 'Cust ID',
	  key: 'id',
	},
	{
	  title: 'Name',
	  key: 'name',
	},
	{
	  title: 'Email',
	  key: 'email',
	},
	{
		title: 'Phone No',
		key: 'phoneNo',
	},
	{
		title: "Today's Income",
		key: 'todaysIncome'
	},
	{
		title: 'Monthly Income',
		key: 'monthlyIncome'
	},
  {
    title: 'Status',
    key: 'status',
  },
	{
		title: 'Action',
		slot: 'action',
		align: 'right'
	}
]
const USER_COLUMNS = [
	{
	  title: 'Name',
	  key: 'name',
	},
	{
	  title: 'Email',
	  key: 'email',
	},
	{
		title: 'Phone No',
		key: 'phoneNo',
	},
	{
		title: 'Gender',
		key: 'gender',
	},
	{
		title: 'Role',
		key: 'role',
	},
	{
		title: 'Action',
		slot: 'action',
		align: 'right'
	}
]


const RETAILER_COLUMNS = [
	{
	  title: 'Shop ID',
	  key: 'id',
	},
	{
	  title: 'Name',
	  key: 'name',
	},
	{
	  title: 'Pan No',
	  key: 'panNumber',
	},
	{
	  title: 'Email',
	  key: 'email',
	},

	{
		title: 'Contact No',
		key: 'phoneNo',
	},
	{
		title: 'Address',
		key: 'address',
	},
	{
		title: 'Profit (%)',
		key: 'percent',
	},
	{
		title: 'Action',
		slot: 'action',
		align: 'right'
	}
]
const RETAILER_TYPE_COLUMNS = [
	{
	  title: 'Name',
	  key: 'name',
	},
	{
		title: 'Action',
		slot: 'action',
		align: 'right'
	}
]

const PRODUCT_COLUMNS = [
	{
	  title: 'Name',
	  key: 'name',
	},
	{
	  title: 'Price (Rs.)',
	  key: 'price',
	},
	{
		title: 'Description',
		key: 'description',
	},
	{
		title: 'Retailer',
		key: 'retailer'
	},
	{
		title: 'Product Code',
		key: 'code'
	},
	{
		title: 'Action',
		slot: 'action',
		align: 'right'
	}
]

const PAYMENT_COLUMNS = [
	{
	  title: 'Name',
	  key: 'name',
	},
	{
	  title: 'Expenditure (Rs.)',
	  key: 'expenditure',
	},
	{
		title: 'Customer',
		key: 'customer',
	},
	{
		title: 'Retailer',
		key: 'retailer'
	},
	{
		title: 'Profit (%)',
		key: 'percent'
	},
]

const CATEGORY_COLUMNS = [
	{
	  title: 'Name',
	  key: 'name',
	},
	{
		title: 'Action',
		slot: 'action',
		align: 'right'
	}
]

export {
	CUSTOMER_COLUMNS,
	RETAILER_COLUMNS,
	RETAILER_TYPE_COLUMNS,
	PRODUCT_COLUMNS,
	PAYMENT_COLUMNS,
	USER_COLUMNS,
	CATEGORY_COLUMNS,
}