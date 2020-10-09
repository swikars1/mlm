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

export {
	CUSTOMER_COLUMNS,
	RETAILER_COLUMNS,
	RETAILER_TYPE_COLUMNS,
}