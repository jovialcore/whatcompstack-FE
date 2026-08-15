import { useAuthStore } from "~/store/useAuthStore"

export default defineNuxtPlugin(async (nuxtApp) => {

    const auth = useAuthStore();

    if (!auth.isLoggedIn) {
        try {
            await auth.fetchUser();
        } catch (e) {
            console.error("Failed to load user session", e);
        }
    }
})