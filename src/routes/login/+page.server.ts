import { redirect, type Actions } from "@sveltejs/kit";
import { SignIn, type User } from "../../lib/models/user";
import type { PageServerLoad } from "./$types";

export const load:PageServerLoad = (async ({locals}) => {
    if(locals.user)
        throw redirect(303, "/")
})

export const actions:Actions = {
    login: async ({request, cookies}) => {
        const formData = await request.formData();
        const data = Object.fromEntries([...formData])
        try {
            let user:User = {
                Id: 0,
                Email: data.Email.toString(),
                Password: data.Password.toString(),
                Username: data.Username.toString()
            }
            const res = await SignIn(user)
            if(res?.error)
                return {
                    error: "user not found",
                    code: 400,
                    email:user.Email,
                    username:user.Username
                }
            cookies.set('session', res.id)
        } catch (error) {
            return {
                error: 'something happened'
            }
        }
        throw redirect(303, '/')
    }
}