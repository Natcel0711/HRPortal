import { redirect, type Actions } from '@sveltejs/kit';
 
export const load = (async ({locals}) => {
    if(locals.user)
        return {
            user: locals.user
        }
})