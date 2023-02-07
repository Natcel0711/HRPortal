export interface User{
    Id:number
    Email:string
    Password:string
    Username:string
}

export const GetUserBySession = async (sessionID:string | undefined):Promise<User> => {
    return await fetch('https://localhost:7234/getbysession', {
        body:JSON.stringify({
            Id: 0,
            SessionId: sessionID,
            UserId: ''
        }),
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
    }).then(x => x.json())
}

export const SignIn = async (user:User) => {
    return await fetch('https://localhost:7234/signin', {
        body:JSON.stringify(user),
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
    }).then(x => x.json())
}

export const SignUp = async (user:User) =>{
    return await fetch('https://localhost:7234/signup', {
        body:JSON.stringify(user),
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
    }).then(x => x.json())
}