export interface User{
    Id:number
    Email:string
    Password:string
    Username:string
}

export const getUserInformation = async (sessionID:string | undefined):Promise<User> => {
    //get user by session id
    if(!sessionID)
        sessionID = ''
    let user = await fetch('https://gouser-production.up.railway.app/users/BySession/' + sessionID).then(x => x.json())
    return user
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