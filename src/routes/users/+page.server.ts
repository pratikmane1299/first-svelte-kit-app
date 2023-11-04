import { slugify } from '$lib';
import type { PageServerLoad } from './$types';
import { someRandomUsers } from './data';

export const load: PageServerLoad = ({url}) => {
	const searchParams = new URLSearchParams(url.searchParams);
	console.log('Test Page: load function called');
	const query = searchParams.get('query');

	console.log('query - ', query);
	
	const filteredUsers = query
		? someRandomUsers.filter((user) => user.name.toLowerCase().startsWith(query.toLowerCase()))
		: someRandomUsers;
	
	return { users: filteredUsers };
};
