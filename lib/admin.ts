import {auth} from "@clerk/nextjs/server";


const allowedIds = [
    "user_2fReC5rJxIKmrPGPAH1vNEQoDaO"
]

export const isAdmin =  () => {
    const {userId} = auth()

    if (!userId) {
        return false
    }

    return allowedIds.indexOf(userId) !== -1
}