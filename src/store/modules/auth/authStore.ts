import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null as string | null,
        customerId: null as number | null
    }),
    actions: {
        setToken(token: string) {
            this.token = token
        },
        clearToken() {
            this.token = null
            this.customerId = null
        },
        setCustomerId(customerId: number) {
            this.customerId = customerId
        }
    },
    getters: {
        isAuthenticated: (state) => !!state.token
    }
})