export interface User{
    Id:Object
    Email:string
    Password:string
    Username:string
}
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
export const GetUserBySession = async (sessionID:string):Promise<User> => {
    return await fetch('http://localhost:8084/getbysession/', {
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
    return await fetch('http://localhost:8084/signin/', {
        body:JSON.stringify(user),
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
    }).then(x => x.json())
}

export const SignUp = async (user:User) =>{
    return await fetch('http://localhost:8084/signup/', {
        body:JSON.stringify(user),
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
    }).then(x => x.json())
}