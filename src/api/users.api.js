
import { base } from '../base'

export async function getUserApi() {

    let listUsers = await base.fetch('users', {
        context: this,
        asArray: true,
        then(data){
        console.log("data get success");
        }
    });
    return listUsers
}

export function addUserApi(user) {
    base.post(`users/${user.id}`, {
        data: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        },
        then(err) {
            if(!err) {
                console.log("add user successful!")
            }
        }
    })
}