import type { LayoutServerLoad } from "./$types"

 export const load = (async ({locals}) => {
    if(locals.user)
        return locals.user
}) satisfies LayoutServerLoad