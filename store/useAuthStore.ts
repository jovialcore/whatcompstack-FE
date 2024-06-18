import { defineStore } from 'pinia'


type User = {
    id: number
    name: string
    email: string
}

type Credentials = {
    email: string,
    password: string,
}

export const useAuthStore = defineStore('auth', () => {


    const { $toast } = useNuxtApp();

    const user = ref<User | null>(null)

    const isLoggedIn = computed(() => !!user.value)


    async function fetchUser() {
        const { data, error } = await useApiFetch("api/community/member")
        user.value = data.value as User
        console.log(error)
    }


    async function login(credentials: Credentials) {

        // fetch csrf-cookie
        await useApiFetch("sanctum/csrf-cookie");

        const login = await useApiFetch("api/login", {
            method: 'POST',
            body: credentials
        })

        await fetchUser();

        return login;
    }


    async function logout() {

        const { data, error } = await useApiFetch('api/community/member/logout', {
            method: "POST"
        })
        user.value = null
        navigateTo("/")

        console.log(error, data.value)
    }

    async function register(credentials) {
        await useApiFetch("sanctum/csrf-cookie");

        const register = await useApiFetch('api/community/signup', {

            method: 'POST',
            body: credentials
        })

        return register;
    }
    // return the an object witht the properties and methods that we intend to expose
    return { user, login, isLoggedIn, fetchUser, logout, register }

});