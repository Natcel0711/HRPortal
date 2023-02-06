import type { Handle } from "@sveltejs/kit";

export const handle:Handle = (async ({event,resolve}) => {
    let session = event.cookies.get('session')
    if(!session)
        return await resolve(event)
    // event.locals.user = await getUserInformation();
    const response = await resolve(event)
    return response
})