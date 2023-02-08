export interface User{
    Id:Object
    Email:string
    Password:string
    Username:string
}
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
export const GetUserBySession = async (sessionID:string):Promise<User> => {
    return await fetch('https://localhost:7234/getbysession/', {
        body:JSON.stringify({
            Id: {},
            SessionId: sessionID,
            UserId: {}
        }),
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
    }).then(x => x.json())
}

export const SignIn = async (user:User) => {
    return await fetch('https://localhost:7234/signin/', {
        body:JSON.stringify(user),
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
    }).then(x => x.json())
}

export const SignUp = async (user:User) =>{
    return await fetch('https://localhost:7234/signup/', {
        body:JSON.stringify(user),
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
    }).then(x => x.json())
}