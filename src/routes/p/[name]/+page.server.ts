import { error } from '@sveltejs/kit';

import { sleep, slugify } from '$lib';
import { someRandomUsers } from '../../users/data';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { name } = params;

	const user = someRandomUsers.find((user) => slugify(user.name) === name);

	if (!user) {
		throw error(404);
	}

	return { user };
};

export const actions = {
	star: async ({request,params}) => {
		const data =  await request.formData();
		const userIdx = someRandomUsers.findIndex((user) => slugify(user.name) === params.name);
		someRandomUsers[userIdx].starred = data.get('starred') === 'true';

		return someRandomUsers[userIdx];
	},
}
