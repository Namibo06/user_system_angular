export type get_all_user=[
	{
	  id: string,
		first_name: string,
		last_name: string,
		email: string,
		nivel_user: string,
		password: string,
		links: [
			{
				rel: string,
				href: string
			}
		]
	}
]
