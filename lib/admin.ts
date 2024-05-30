import {auth} from "@clerk/nextjs/server";

const allowedIds = JSON.parse(process.env.ALLOWED_IDS || '[]')

export const isAdmin =  () => {
    const {userId} = auth()

    if (!userId) {
        return false
    }

    return allowedIds.indexOf(userId) !== -1
}