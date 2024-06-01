import { defineStore } from 'pinia'

type User = {
    id: number
    name: string
    email: string
}

type Credentials = {
    email: string,
    password: string | number,
}

export const useAuthStore = defineStore('auth', () => {

    const user = ref<User | null>(null)

    async function login(credentials: Credentials) {

        // fetch csrf-cookie
        await useApiFetch("sanctum/csrf-cookie");


        await useApiFetch("api/login", {
            method: 'POST',
            body: credentials
        })
    }


    // return the an object witht the properties and methods that we intend to expose
    return { user, login }

});