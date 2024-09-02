<template>
    <div class="login-form">
        <h2 class="text-center">Login</h2>
        <form @submit.prevent="submitLogin">
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" v-model="form.email" class="form-control" required />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" v-model="form.password" class="form-control" required />
            </div>
            <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-primary">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
import { useAuthStore } from '../../store/modules/auth/authStore'
import { ref } from 'vue'
export default {
    name: 'LoginForm',
    setup() {
        const authStore = useAuthStore()
        const form = ref({
            email: '',
            password: ''
        })
        const submitLogin = async () => {
            try {
                const response = await fetch('http://localhost:5092/api/Auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: email.value, password: password.value })
                })
                const data = await response.json()
                if (response.ok) {
                    if (data.token && data.token === "Invalid credentials") {
                        alert('Invalid credentials');
                    }
                    else {
                        authStore.setToken(data.token)
                        authStore.setCustomerId(data.customerId)
                        alert('Login successful');
                    }
                } else {
                    console.error('Login failed:', data.message)
                    alert('Login failed');
                }
            } catch (error) {
                console.error('An error occurred:', error)
            }
        }
        return {
            form,
            submitLogin
        }
    }
}
</script>

<style scoped>
.login-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.text-center {
    text-align: center;
}

.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
}
</style>