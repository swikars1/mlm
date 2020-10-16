const CUSTOMER_COLUMNS = [
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
		title: 'Address',
		key: 'address',
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
	  title: 'Name',
	  key: 'name',
	},
	{
	  title: 'Pan No',
	  key: 'panNumber',
	},
	{
		title: 'Phone No',
		key: 'phoneNo',
	},
	{
		title: 'Address',
		key: 'address',
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
		key: 'retailerId'
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
		key: 'customerId',
	},
	{
		title: 'Retailer',
		key: 'retailerId'
	},
	{
		title: 'Product',
		key: 'productId'
	},
]

export {
	CUSTOMER_COLUMNS,
	RETAILER_COLUMNS,
	RETAILER_TYPE_COLUMNS,
	PRODUCT_COLUMNS,
	PAYMENT_COLUMNS,
	USER_COLUMNS,
}